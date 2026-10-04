import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { contactSchema } from "@/components/forms/ContactSchema";
import { inngest } from "@/lib/inngest/client";

export async function POST(request) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: "Please check the information you provided.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const { name, email, whatsapp, message } = validation.data;

    const cookieReferralCode =
      request.cookies.get("sga_referral_code")?.value;

    const referralCode =
      body.referralCode?.trim() || cookieReferralCode?.trim() || null;

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

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        whatsapp,
        message,
        referrerId,
      },
    });

    await inngest.send({
        name: "contact/submitted",
        data: {
            name,
            email,
            whatsapp,
            message,
            referrerEmail,
            submittedAt: new Date().toLocaleString("en-NG", {
            dateStyle: "long",
            timeStyle: "short",
            }),
        },
    });

    return NextResponse.json(
      {
        message: "Your message has been received successfully.",
        contactId: contact.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    return NextResponse.json(
      {
        message:
          "Unable to submit your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}