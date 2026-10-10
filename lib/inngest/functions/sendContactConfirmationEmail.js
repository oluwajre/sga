import { render } from "@react-email/render";

import { inngest } from "@/lib/inngest/client";
import resend from "@/lib/resend";
import ContactConfirmationEmail from "@/app/emails/ContactConfirmationEmail";

export const sendContactConfirmationEmail = inngest.createFunction(
  {
    id: "send-contact-confirmation-email",
    triggers: {
      event: "contact/submitted",
    },
  },
  async ({ event }) => {
  const { name, email } = event.data;

  const emailHtml = await render(
    <ContactConfirmationEmail name={name} />
  );

  console.log("About to send confirmation email:", email);

  const { data, error } = await resend.emails.send({
    from: process.env.MAIL_FROM,
    to: email,
    subject: "We've received your message",
    html: emailHtml,
  });

  console.log("Resend response received:", { data, error });

  if (error) {
    console.error("Contact confirmation email failed:", error);

    throw new Error(error.message);
  }

  console.log("Contact confirmation email sent:", data);

  return {
    success: true,
  };
}
);