import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { sendContactNotificationEmail } from "@/lib/inngest/functions/sendContactNotificationEmail";
import { sendContactConfirmationEmail } from "@/lib/inngest/functions/sendContactConfirmationEmail";
import { sendLeadConfirmationEmail } from "@/lib/inngest/functions/sendLeadConfirmationEmail";
import { sendLeadNotificationEmail } from "@/lib/inngest/functions/sendLeadNotificationEmail";
import { sendApplicationNotificationEmail } from "@/lib/inngest/functions/sendApplicationNotificationEmail";
import { sendApplicationConfirmationEmail } from "@/lib/inngest/functions/sendApplicationConfirmationEmail";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    sendContactNotificationEmail,
    sendContactConfirmationEmail,
    sendLeadConfirmationEmail,
    sendLeadNotificationEmail,
    sendApplicationNotificationEmail,
    sendApplicationConfirmationEmail,
  ],
});