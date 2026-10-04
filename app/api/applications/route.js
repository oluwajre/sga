import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { applicationSchema } from "@/components/forms/applicationSchema";
import { inngest } from "@/lib/inngest/client";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = applicationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Please check the submitted information.",
          errors: result.error.treeifyError(),
        },
        { status: 400 }
      );
    }

    const {
        name,
        email,
        whatsapp,
        city,
        profession,
        organisation,
        experience,
        programme,
        motivation,
        goals,
        heardAboutUs
    } = result.data;

    let referrerId = null;
    let referrerEmail = null;

    const cookieReferralCode = request.cookies.get("sga_referral_code")?.value;

    const referralCode = body.referralCode || cookieReferralCode;

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

    const application = await prisma.application.create({
      data: {
        name,
        email,
        whatsapp,
        city,
        profession,
        organisation: organisation || null,
        experience: experience || null,
        programme,
        motivation: motivation || null,
        goals: goals || null,
        heardAboutUs: heardAboutUs || null,
        referrerId,
      },
    });

    console.log("Application saved:", application.id);

    await inngest.send({
      name: "application/submitted",
      data: {
        name,
        email,
        whatsapp,
        programme,
        profession,
        heardAboutUs,
        submittedAt: new Date().toLocaleString("en-NG", {
          dateStyle: "long",
          timeStyle: "short",
        }),
        referrerEmail,
      },
    });

    return NextResponse.json(
      {
        message: "Application submitted successfully.",
        applicationId: application.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Application submission error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}