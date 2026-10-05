import { Button, Preview, Text,
} from "@react-email/components";

import EmailHeader from "./components/EmailHeader";
import EmailLayout from "./components/EmailLayout";

export default function LeadConfirmationEmail({ name }) {
  return (
    <EmailLayout>
      <Preview>
        Thank you for taking the time to explore School Growth Academy
      </Preview>

      <EmailHeader
        label="School Growth Academy"
        heading="Thank you for listening"
        subheading="We appreciate you taking the time to explore what School Growth Academy has to offer."
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
        Thank you for taking the time to learn more about School Growth Academy.
      </Text>

      <Text
        style={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        We believe that meaningful growth in education starts with people who
        are willing to learn, question existing approaches, and develop the
        practical skills needed to create better outcomes.
      </Text>

      <Text
        style={{
          color: "#475569",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        Whatever stage you are at in your professional journey, keep
        exploring, keep building your knowledge, and keep looking for
        opportunities to create meaningful value in education.
      </Text>

      <Text
        style={{
          color: "#0A192F",
          fontSize: "17px",
          lineHeight: "1.6",
          fontWeight: "700",
          margin: "28px 0 0",
        }}
      >
        Your journey towards becoming a stronger education professional can
        start with one decision to keep learning.
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