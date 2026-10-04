import { Hr, Section, Text } from "@react-email/components";

export default function EmailFooter() {
  return (
    <>
      <Hr
        style={{
          borderColor: "#E2E8F0",
          margin: "32px 0",
        }}
      />

      <Section>
        <Text
          style={{
            color: "#059669",
            fontSize: "14px",
            fontWeight: "700",
            margin: 0,
          }}
        >
          School Growth Academy
        </Text>

        <Text
          style={{
            color: "#64748B",
            fontSize: "13px",
            lineHeight: "1.5",
            margin: "6px 0 0",
          }}
        >
          Building practical capabilities for sustainable school growth.
        </Text>
      </Section>
    </>
  );
}