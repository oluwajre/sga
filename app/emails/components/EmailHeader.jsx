import { Heading, Img, Section, Text } from "@react-email/components";

export default function EmailHeader({
  label,
  heading,
  subheading,
  logoUrl = "https://novance.com.ng/images/logos/sga-logo-white.png",
}) {
  return (
    <Section
      style={{
        backgroundColor: "#0A192F",
        padding: "36px 40px",
        borderRadius: "8px 8px 0 0",
      }}
    >
      <Img
        src={logoUrl}
        alt="School Growth Academy"
        width="180"
        style={{
          display: "block",
          width: "180px",
          height: "auto",
        }}
      />

      {label && (
        <Text
          style={{
            margin: "32px 0 8px",
            color: "#10B981",
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      )}

      <Heading
        as="h1"
        style={{
          margin: 0,
          color: "#FFFFFF",
          fontSize: "28px",
          lineHeight: "36px",
          fontWeight: "700",
        }}
      >
        {heading}
      </Heading>

      {subheading && (
        <Text
          style={{
            margin: "12px 0 0",
            color: "#CBD5E1",
            fontSize: "15px",
            lineHeight: "24px",
          }}
        >
          {subheading}
        </Text>
      )}
    </Section>
  );
}