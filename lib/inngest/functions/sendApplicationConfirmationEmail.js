import { render } from "@react-email/render";

import { inngest } from "@/lib/inngest/client";
import resend from "@/lib/resend";
import ApplicationConfirmationEmail from "@/app/emails/ApplicationConfirmationEmail";

export const sendApplicationConfirmationEmail = inngest.createFunction(
  {
    id: "send-application-confirmation-email",
    triggers: {
        event: "application/submitted",
    }
  },
  async ({ event }) => {
    const {
      name,
      email,
      programme,
    } = event.data;

    const emailHtml = await render(
      <ApplicationConfirmationEmail
        name={name}
        programme={programme}
      />
    );

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Application Received - School Growth Academy",
      html: emailHtml,
    });

    if (error) {
      console.error("Application confirmation email failed:", error);

      throw new Error(error.message);
    }

    console.log("Application confirmation email sent:", data);

    return {
      success: true,
    };
  }
);