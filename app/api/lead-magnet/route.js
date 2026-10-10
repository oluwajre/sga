import { NextResponse } from "next/server";
import { leadMagnetSchema } from "@/components/forms/leadMagnetSchema";
import prisma from "@/lib/prisma";
import { inngest } from "@/lib/inngest/client";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = leadMagnetSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Please check the submitted information.",
          errors: result.error.treeifyError(),
        },
        { status: 400 }
      );
    }

    const { name, email, whatsapp, profession, heardAboutUs } = result.data;

    const cookieReferralCode =
      request.cookies.get("sga_referral_code")?.value;

    const referralCode =
      body.referralCode?.trim() ||
      cookieReferralCode?.trim() ||
      null;

    let referrerId = null;
    let referrerEmail = null;

    if (referralCode) {
      const referrer = await prisma.referrer.findUnique({
        where: {
          code: referralCode,
          isActive: true,
        },
        select: {
          id: true,
          email: true,
        },
      });

      if (referrer) {
        referrerId = referrer.id;
        referrerEmail = referrer.email;
      }
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        whatsapp,
        profession,
        heardAboutUs: heardAboutUs || null,
        referrerId,
      },
    });

    await inngest.send({
      name: "lead/submitted",
      data: {
        name,
        email,
        whatsapp,
        profession,
        referrerEmail,
        submittedAt: new Date().toLocaleString("en-NG", {
          dateStyle: "long",
          timeStyle: "short",
        }),
      },
    });

    return NextResponse.json(
      {
        message: "Your report request has been received successfully.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead magnet submission error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}