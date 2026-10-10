import {
  Button,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import EmailHeader from "./components/EmailHeader";
import EmailLayout from "./components/EmailLayout";

export default function ApplicationNotificationEmail({
  name,
  email,
  whatsapp,
  programme,
  profession,
  heardAboutUs,
  submittedAt,
  referrerEmail,
}) {
  return (
    <EmailLayout>
      <Preview>
        New application received from {name}
      </Preview>

      <EmailHeader
        label="Application Notification"
        heading="New Application Received"
        subheading="A new applicant has submitted an application through the School Growth Academy website."
      />

      <Text
        style={{
          margin: "28px 0 0",
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        A new application has been submitted and is ready for review.
      </Text>

      {/* Applicant Details */}
      <Section
        style={{
          marginTop: "24px",
          padding: "20px",
          backgroundColor: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
        }}
      >
        <Text
          style={{
            margin: "0 0 16px",
            color: "#0A192F",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "700",
          }}
        >
          Applicant Details
        </Text>

        <Text
          style={{
            margin: "8px 0",
            color: "#475569",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          <strong>Name:</strong> {name}
        </Text>

        <Text
          style={{
            margin: "8px 0",
            color: "#475569",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          <strong>Email:</strong>{" "}
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
            margin: "8px 0",
            color: "#475569",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          <strong>Phone / WhatsApp:</strong>{" "}
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

        {profession && (
          <Text
            style={{
              margin: "8px 0",
              color: "#475569",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            <strong>Profession:</strong> {profession}
          </Text>
        )}

        {programme && (
          <Text
            style={{
              margin: "8px 0",
              color: "#475569",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            <strong>Programme:</strong> {programme}
          </Text>
        )}
      </Section>

      {/* Marketing Source */}
      {(heardAboutUs || referrerEmail) && (
        <Section
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
          }}
        >
          <Text
            style={{
              margin: "0 0 16px",
              color: "#0A192F",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "700",
            }}
          >
            Lead Source
          </Text>

          {heardAboutUs && (
            <Text
              style={{
                margin: "8px 0",
                color: "#475569",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              <strong>Heard about SGA through:</strong> {heardAboutUs}
            </Text>
          )}

          {referrerEmail && (
            <Text
              style={{
                margin: "8px 0",
                color: "#475569",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              <strong>Referrer:</strong>{" "}
              <a
                href={`mailto:${referrerEmail}`}
                style={{
                  color: "#059669",
                  textDecoration: "none",
                }}
              >
                {referrerEmail}
              </a>
            </Text>
          )}
        </Section>
      )}

      {/* Action */}
      <Button
        href={`mailto:${email}`}
        style={{
          display: "inline-block",
          marginTop: "28px",
          padding: "13px 22px",
          backgroundColor: "#F59E0B",
          color: "#0A192F",
          borderRadius: "7px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "700",
          textDecoration: "none",
        }}
      >
        Contact Applicant
      </Button>

      {submittedAt && (
        <Text
          style={{
            margin: "24px 0 0",
            color: "#94A3B8",
            fontSize: "13px",
            lineHeight: "20px",
          }}
        >
          Application submitted: {submittedAt}
        </Text>
      )}
    </EmailLayout>
  );
}