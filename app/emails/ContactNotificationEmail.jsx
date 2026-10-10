import { Button, Preview, Section, Text } from "@react-email/components";

import EmailHeader from "./components/EmailHeader";
import EmailLayout from "./components/EmailLayout";

export default function ContactNotificationEmail({ name, email, whatsapp, message, submittedAt }) 
{
  return (
    <EmailLayout>
      <Preview>
        New contact enquiry from {name}
      </Preview>

      <EmailHeader
        label="Contact Notification"
        heading="New Contact Enquiry"
        subheading="Someone has submitted an enquiry through the School Growth Academy website."
      />

      {/* Contact Details */}
      <Text
        style={{
          margin: "32px 0 18px",
          color: "#059669",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "700",
          letterSpacing: "1.4px",
          textTransform: "uppercase",
        }}
      >
        Contact Details
      </Text>

      <Section
        style={{
          padding: "20px",
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
        }}
      >
        <Text
          style={{
            margin: "0 0 4px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Name
        </Text>

        <Text
          style={{
            margin: "0 0 20px",
            color: "#0a192f",
            fontSize: "15px",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            margin: "0 0 4px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Email
        </Text>

        <Text
          style={{
            margin: "0 0 20px",
            fontSize: "15px",
            lineHeight: "24px",
          }}
        >
          <a
            href={`mailto:${email}`}
            style={{
              color: "#059669",
              textDecoration: "none",
            }}
          >
            {email}
          </a>
        </Text>

        <Text
          style={{
            margin: "0 0 4px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Phone / WhatsApp
        </Text>

        <Text
          style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: "24px",
          }}
        >
          <a
            href={`tel:${whatsapp}`}
            style={{
              color: "#059669",
              textDecoration: "none",
            }}
          >
            {whatsapp}
          </a>
        </Text>
      </Section>

      {/* Message */}
      <Text
        style={{
          margin: "32px 0 14px",
          color: "#059669",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "700",
          letterSpacing: "1.4px",
          textTransform: "uppercase",
        }}
      >
        Message
      </Text>

      <Section
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e2e8f0",
          borderRight: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
          borderLeft: "4px solid #10b981",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <Text
          style={{
            margin: 0,
            color: "#334155",
            fontSize: "15px",
            lineHeight: "26px",
            whiteSpace: "pre-line",
          }}
        >
          {message}
        </Text>
      </Section>

      {/* Reply Button */}
      <Section
        style={{
          marginTop: "32px",
        }}
      >
        <Button
          href={`mailto:${email}`}
          style={{
            display: "inline-block",
            padding: "13px 22px",
            backgroundColor: "#f59e0b",
            color: "#0a192f",
            borderRadius: "7px",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Reply to {name}
        </Button>
      </Section>

      <Text
        style={{
          margin: "28px 0 0",
          color: "#94a3b8",
          fontSize: "12px",
          lineHeight: "20px",
        }}
      >
        Submitted {submittedAt}
      </Text>
    </EmailLayout>
  );
}