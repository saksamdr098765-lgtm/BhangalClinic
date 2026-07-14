import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import {
  colors,
  radius,
  shadow,
  spacing,
} from "../styles";

export default function EmailLayout({
  preview,
  title,
  subtitle,
  children,
}) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          margin: 0,
          backgroundColor: colors.background,
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
          padding: "40px 20px",
        }}
      >
        <Container
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            background: colors.surface,
            borderRadius: radius.xl,
            overflow: "hidden",
            border: `1px solid ${colors.border}`,
            boxShadow: shadow.card,
          }}
        >
          {/* Header */}

          <Section
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#4f46e5)",
              padding: "42px",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              SHYAM BUDGET FRIENDLY LABS
            </Text>

            <Text
              style={{
                margin: "12px 0 0",
                color: "#ffffff",
                fontSize: "34px",
                fontWeight: 800,
                lineHeight: "42px",
              }}
            >
              {title}
            </Text>

            {subtitle && (
              <Text
                style={{
                  margin: "16px 0 0",
                  color: "#ffffff",
                  opacity: 0.9,
                  fontSize: "16px",
                  lineHeight: "28px",
                }}
              >
                {subtitle}
              </Text>
            )}
          </Section>

          {/* Content */}

          <Section
            style={{
              padding: spacing.xxl,
            }}
          >
            {children}
          </Section>

          <Hr
            style={{
              borderColor: colors.border,
              margin: 0,
            }}
          />

          {/* Footer */}

          <Section
            style={{
              padding: "28px 40px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: colors.muted,
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              Thank you for choosing{" "}
              <strong
                style={{
                  color: colors.text,
                }}
              >
                Shyam Budget Friendly Labs
              </strong>
            </Text>

            <Text
              style={{
                margin: "8px 0 0",
                color: colors.muted,
                fontSize: "13px",
              }}
            >
              Accurate Diagnostics • Home Sample Collection • Fast Reports
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}