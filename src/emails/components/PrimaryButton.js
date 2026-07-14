import { Button } from "@react-email/components";

import { colors, radius } from "../styles";

export default function PrimaryButton({
  href,
  children,
  variant = "primary",
}) {
  const variants = {
    primary: {
      background: colors.primary,
      color: "#ffffff",
    },

    success: {
      background: colors.success,
      color: "#ffffff",
    },

    dark: {
      background: colors.text,
      color: "#ffffff",
    },

    outline: {
      background: "#ffffff",
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    },
  };

  const current = variants[variant];

  return (
    <Button
      href={href}
      style={{
        display: "inline-block",
        padding: "14px 24px",
        background: current.background,
        color: current.color,
        borderRadius: radius.md,
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: "600",
        border: current.border || "none",
      }}
    >
      {children}
    </Button>
  );
}