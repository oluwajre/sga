import { render } from "@react-email/render";

import { inngest } from "@/lib/inngest/client";
import resend from "@/lib/resend";
import ApplicationNotificationEmail from "@/app/emails/ApplicationNotificationEmail";

export const sendApplicationNotificationEmail = inngest.createFunction(
  {
    id: "send-application-notification-email",
    triggers: {
        event: "application/submitted",
    }
  },
  async ({ event }) => {
    const {
      name,
      email,
      whatsapp,
      programme,
      profession,
      heardAboutUs,
      submittedAt,
      referrerEmail,
    } = event.data;

    const emailHtml = await render(
      <ApplicationNotificationEmail
        name={name}
        email={email}
        whatsapp={whatsapp}
        programme={programme}
        profession={profession}
        heardAboutUs={heardAboutUs}
        submittedAt={submittedAt}
        referrerEmail={referrerEmail}
      />
    );

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: "notifications@novance.com.ng",
      subject: `New Application from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Application notification email failed:", error);

      throw new Error(error.message);
    }

    console.log("Application notification email sent:", data);

    return {
      success: true,
    };
  }
);