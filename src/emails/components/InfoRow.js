import {
  Row,
  Column,
  Text,
} from "@react-email/components";

import {
  colors,
  spacing,
  typography,
} from "../styles";

export default function InfoRow({
  label,
  value,
  badge = false,
  badgeColor = "success",
}) {
  const badgeStyles = {
    success: {
      background: colors.successBg,
      color: colors.success,
    },
    danger: {
      background: colors.dangerBg,
      color: colors.danger,
    },
    warning: {
      background: colors.warningBg,
      color: colors.warning,
    },
    primary: {
      background: "#DBEAFE",
      color: colors.primary,
    },
  };

  return (
    <>
      <Row
        style={{
          padding: `${spacing.md} 0`,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Column style={{ width: "38%" }}>
          <Text
            style={{
              ...typography.label,
              margin: 0,
            }}
          >
            {label}
          </Text>
        </Column>

        <Column style={{ width: "62%" }}>
          {badge ? (
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "600",
                ...badgeStyles[badgeColor],
              }}
            >
              {value}
            </span>
          ) : (
            <Text
              style={{
                ...typography.value,
                margin: 0,
                textAlign: "right",
              }}
            >
              {value || "-"}
            </Text>
          )}
        </Column>
      </Row>
    </>
  );
}