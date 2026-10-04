import { render } from "react-email";
import { inngest } from "../client";
import LeadConfirmationEmail from "@/app/emails/LeadConfirmationEmail";
import resend from "@/lib/resend";

export const sendLeadConfirmationEmail = inngest.createFunction(
    {
        id: "send-lead-confirmation-email",
        triggers: {
            event: "lead/submitted",
        }
    },
    async ({ event }) => {
        const { name, email } = event.data;

        const emailHtml = await render(
            <LeadConfirmationEmail name={name} />
        );

        const { data, error } = await resend.emails.send({
            from: process.env.MAIL_FROM,
            to: email,
            subject: "Thank you for your interest in School Growth Academy",
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
)