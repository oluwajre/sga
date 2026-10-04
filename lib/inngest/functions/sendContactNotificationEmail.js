import { render } from "@react-email/render";
import { inngest } from "@/lib/inngest/client";
import resend from "@/lib/resend";
import ContactNotificationEmail from "@/app/emails/ContactNotificationEmail";

export const sendContactNotificationEmail = inngest.createFunction(
  {
    id: "send-contact-notification-email",
    triggers: {
      event: "contact/submitted",
    },
  },
  async ({ event }) => {
    const {
      name,
      email,
      whatsapp,
      message,
      submittedAt,
      referrerEmail,
    } = event.data;

    const emailHtml = await render(
      <ContactNotificationEmail
        name={name}
        email={email}
        whatsapp={whatsapp}
        message={message}
        submittedAt={submittedAt}
      />
    );

    const {data, error} = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: "oluwajre2412@gmail.com",
      ...(referrerEmail && { cc: referrerEmail }),
      subject: `New Contact Enquiry from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending contact notification email:", error);

      throw new Error(error.message);
    }

    return {
      success: true,
    };
  }
);