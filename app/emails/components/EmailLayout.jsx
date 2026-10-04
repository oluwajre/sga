import { Body, Container, Head, Html } from "@react-email/components";

import EmailFooter from "./EmailFooter";

export default function EmailLayout({ children }) {
  return (
    <Html>
      <Head />

      <Body
        style={{
          backgroundColor: "#F8FAFC",
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: "40px 20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            margin: "0 auto",
            maxWidth: "600px",
            padding: "40px",
          }}
        >
          {children}

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
}