import {
  Section,
  Heading,
  Text,
  Hr,
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

export default function AdminBookingEmail({ booking }) {
  const mapsLink = booking.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        booking.address
      )}`
    : "#";

  const whatsapp = `https://wa.me/91${booking.phone.replace(/\D/g, "")}`;

  return (
    <EmailLayout
      preview={`New booking from ${booking.name}`}
      title="🩺 New Booking Received"
      subtitle="A patient has submitted a booking request through the website."
    >
      {/* Patient Details */}

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
          margin: 0,
        }}
      >
        👤 Patient Details
      </Heading>

      <Section
        style={{
          marginTop: spacing.lg,
        }}
      >
        <InfoRow label="Name" value={booking.name} />
        <InfoRow label="Phone" value={booking.phone} />
        <InfoRow label="Email" value={booking.email} />
      </Section>

      <Hr />

      {/* Booking */}

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
        }}
      >
        🧪 Booking Information
      </Heading>

      <Section
        style={{
          marginTop: spacing.lg,
        }}
      >
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

      <Hr />

      {/* Address */}

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
        }}
      >
        📍 Address
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
          {booking.address || "Not Provided"}
        </Text>
      </Section>

      <Hr />

      {/* Notes */}

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
        }}
      >
        📝 Additional Notes
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
          {booking.notes || "No additional notes."}
        </Text>
      </Section>

      <Hr
        style={{
          margin: "40px 0",
        }}
      />

      {/* Actions */}

      <Heading
        as="h2"
        style={{
          fontSize: 22,
          color: colors.text,
        }}
      >
        Quick Actions
      </Heading>

      <Row
        style={{
          marginTop: spacing.lg,
        }}
      >
        <Column>
          <PrimaryButton
            href={`tel:${booking.phone}`}
          >
            📞 Call Patient
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

        {booking.address && (
          <Column>
            <PrimaryButton
              variant="outline"
              href={mapsLink}
            >
              📍 Open Maps
            </PrimaryButton>
          </Column>
        )}
      </Row>
    </EmailLayout>
  );
}