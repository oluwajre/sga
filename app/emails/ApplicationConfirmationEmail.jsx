import { Button, Preview, Text } from "@react-email/components";

import EmailHeader from "./components/EmailHeader";
import EmailLayout from "./components/EmailLayout";

export default function ApplicationConfirmationEmail({
  name,
  programme,
}) {
  return (
    <EmailLayout>
      <Preview>
        We have received your School Growth Academy application
      </Preview>

      <EmailHeader
        label="Application Received"
        heading="Thank you for applying"
        subheading="Your application to School Growth Academy has been successfully received."
      />

      <Text
        style={{
          margin: "28px 0 0",
          color: "#1E293B",
          fontSize: "16px",
          lineHeight: "1.6",
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
        Thank you for taking the time to apply to School Growth Academy.
        We appreciate your interest in developing the practical skills,
        knowledge, and capabilities needed to create meaningful impact
        in education.
      </Text>

      {programme && (
        <Text
          style={{
            margin: "24px 0",
            padding: "16px 20px",
            backgroundColor: "#F8FAFC",
            borderLeft: "4px solid #10B981",
            color: "#1E293B",
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          <strong>Programme applied for:</strong>
          <br />
          {programme}
        </Text>
      )}

      <Text
        style={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        Our team will review the information you provided 
        and contact you shortly for the next steps.
      </Text>

      <Text
        style={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        In the meantime, we encourage you to continue exploring School
        Growth Academy and the opportunities available to you.
      </Text>

      <Text
        style={{
          margin: "28px 0 0",
          color: "#0A192F",
          fontSize: "17px",
          lineHeight: "1.6",
          fontWeight: "700",
        }}
      >
        Thank you for taking this step towards your professional growth.
        We look forward to connecting with you.
      </Text>

      <Button
        href="https://novance.com.ng/programmes"
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
        Explore SGA Programmes
      </Button>
    </EmailLayout>
  );
}