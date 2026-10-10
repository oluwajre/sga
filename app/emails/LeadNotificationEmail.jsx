import { Button, Preview, Section, Text } from "@react-email/components";

import EmailHeader from "./components/EmailHeader";
import EmailLayout from "./components/EmailLayout";

export default function LeadNotificationEmail({
  name,
  email,
  whatsapp,
  profession,
  submittedAt,
  referrerEmail,
}) {
  return (
    <EmailLayout>
      <Preview>
        New lead received{referrerEmail ? ` from ${referrerEmail}` : ""}
      </Preview>

      <EmailHeader
        label="Lead Notification"
        heading="New Lead Received"
        subheading="A new lead has submitted their details through the School Growth Academy website."
      />

      {/* Lead Details */}
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
        Lead Details
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
            margin: "0 0 20px",
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
          Profession
        </Text>

        <Text
          style={{
            margin: 0,
            color: "#0a192f",
            fontSize: "15px",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >
          {profession}
        </Text>
      </Section>

      {/* Referral */}
      {referrerEmail && (
        <>
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
            Referral
          </Text>

          <Section
            style={{
              padding: "20px",
              backgroundColor: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: "10px",
            }}
          >
            <Text
              style={{
                margin: "0 0 6px",
                color: "#64748b",
                fontSize: "12px",
                lineHeight: "18px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Referred By
            </Text>

            <Text
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              <a
                href={`mailto:${referrerEmail}`}
                style={{
                  color: "#059669",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                {referrerEmail}
              </a>
            </Text>
          </Section>
        </>
      )}

      {/* Action */}
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
          Contact {name}
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
        Lead received {submittedAt}
      </Text>
    </EmailLayout>
  );
}