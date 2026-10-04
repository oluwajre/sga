import { Preview, Text } from "@react-email/components";

import EmailHeader from "./components/EmailHeader";
import EmailLayout from "./components/EmailLayout";

export default function ContactConfirmationEmail({ name }) {
  return (
    <EmailLayout>
      <Preview>
        We&apos;ve received your message — School Growth Academy
      </Preview>

      <EmailHeader
        label="School Growth Academy"
        heading="We&apos;ve received your message"
        subheading="Thank you for reaching out. Your enquiry has been received."
      />

      <Text
        style={{
          color: "#1E293B",
          fontSize: "16px",
          lineHeight: "1.6",
          marginTop: "28px",
        }}
      >
        Hi {name},
      </Text>

      <Text
        style={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        Thank you for reaching out to School Growth Academy. We&apos;ve
        received your enquiry and a member of our team will review your
        message and get back to you shortly.
      </Text>

      <Text
        style={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        We appreciate you getting in touch with us and look forward to
        speaking with you.
      </Text>
    </EmailLayout>
  );
}