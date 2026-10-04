import LeadConfirmationEmail from "@/app/emails/LeadConfirmationEmail";
import { inngest } from "../client";
import resend from "@/lib/resend";
import { render } from "react-email";
import LeadNotificationEmail from "@/app/emails/LeadNotificationEmail";

export const sendLeadNotificationEmail = inngest.createFunction(
  {
    id: "send-lead-notification-email",
    triggers: {
      event: "lead/submitted",
    },
  },
  async ({ event }) => {
    const { name, email, whatsapp, profession, referrerEmail, submittedAt } = event.data;

    const emailHtml = await render(
      <LeadNotificationEmail 
        name={name}
        email={email}
        whatsapp={whatsapp}
        profession={profession}
        submittedAt={submittedAt}
        referrerEmail={referrerEmail}
      />
    );

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: email,
      subject: `New lead received${referrerEmail ? ` from ${referrerEmail}` : ""}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Lead confirmation email failed:", error);
      throw new Error(error.message);
    }

    return {
      success: true,
    };
  }
);