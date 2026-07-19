import {
  Heading,
  Hr,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

import EmailLayout from "./components/EmailLayout";
import InfoRow from "./components/InfoRow";
import PrimaryButton from "./components/PrimaryButton";

import {
  colors,
  radius,
  spacing,
} from "./styles";
import SITE_CONFIG from "@/app/SITE_CONFIG";

export default function CustomerBookingEmail({ booking }) {
  const phone = process.env.NEXT_PUBLIC_PHONE || "+91XXXXXXXXXX";

  const whatsapp = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <EmailLayout
      preview="Your booking request has been received."
      title="🎉 Booking Confirmed"
      subtitle={`Hello ${booking.name}, we've successfully received your booking request.`}
    >
      <Section>
        <Text
          style={{
            color: colors.text,
            fontSize: "16px",
            lineHeight: "28px",
            margin: 0,
          }}
        >
          Thank you for choosing
          <strong> {SITE_CONFIG.name}</strong>
        </Text>

        <Text
          style={{
            color: colors.muted,
            fontSize: "15px",
            lineHeight: "26px",
            marginTop: spacing.md,
          }}
        >
          Our team has received your booking request and will contact you
          shortly to confirm your appointment.
        </Text>
      </Section>

      <Hr />

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
        }}
      >
        🧪 Booking Summary
      </Heading>

      <Section
        style={{
          marginTop: spacing.lg,
        }}
      >
        <InfoRow
          label="Patient"
          value={booking.name}
        />

        <InfoRow
          label="Selected Test"
          value={booking.test}
        />

        <InfoRow
          label="Preferred Date"
          value={booking.preferredDate}
        />

        <InfoRow
          label="Preferred Time"
          value={booking.preferredTime}
        />

        <InfoRow
          label="Home Collection"
          value={
            booking.homeCollection
              ? "Yes"
              : "No"
          }
          badge
          badgeColor={
            booking.homeCollection
              ? "success"
              : "danger"
          }
        />
      </Section>

      {booking.homeCollection && (
        <>
          <Hr />

          <Heading
            as="h2"
            style={{
              fontSize: 22,
              color: colors.text,
            }}
          >
            📍 Collection Address
          </Heading>

          <Section
            style={{
              background: "#f8fafc",
              border: `1px solid ${colors.border}`,
              borderRadius: radius.md,
              padding: spacing.lg,
              marginTop: spacing.md,
            }}
          >
            <Text
              style={{
                margin: 0,
                color: colors.text,
                lineHeight: "26px",
              }}
            >
              {booking.address}
            </Text>
          </Section>
        </>
      )}

      <Hr />

      <Section
        style={{
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: radius.md,
          padding: spacing.lg,
        }}
      >
        <Text
          style={{
            margin: 0,
            color: colors.text,
            fontWeight: 600,
          }}
        >
          📌 What's Next?
        </Text>

        <Text
          style={{
            color: colors.muted,
            lineHeight: "28px",
            marginTop: spacing.sm,
          }}
        >
          • Our team will call you to confirm your appointment.
          <br />
          • Please keep a valid ID proof ready if required.
          <br />
          • If you've chosen Home Collection, our phlebotomist will visit
          your address at the confirmed time.
          <br />
          • Your reports will be shared digitally once they're ready.
        </Text>
      </Section>

      <Hr />

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
        }}
      >
        Need Assistance?
      </Heading>

      <Row
        style={{
          marginTop: spacing.lg,
        }}
      >
        <Column>
          <PrimaryButton href={`tel:${phone}`}>
            📞 Call Us
          </PrimaryButton>
        </Column>

        <Column>
          <PrimaryButton
            variant="success"
            href={whatsapp}
          >
            💬 WhatsApp
          </PrimaryButton>
        </Column>
      </Row>

      <Text
        style={{
          marginTop: spacing.xl,
          textAlign: "center",
          color: colors.muted,
          fontSize: "14px",
          lineHeight: "26px",
        }}
      >
        Thank you for trusting us with your healthcare.
        <br />
        We look forward to serving you.
      </Text>
    </EmailLayout>
  );
}