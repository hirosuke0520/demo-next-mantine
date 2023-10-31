import React from "react";
import "@mantine/core/styles.css";
import {
  Button,
  FactoryPayload,
  MantineColor,
  MantineSize,
  useMantineTheme,
} from "@mantine/core";

interface ButtonProps {
  color?: MantineColor;
  variant?: FactoryPayload["variant"] extends string
    ? FactoryPayload["variant"] | (string & {})
    : string;
  size?: MantineSize | `compact-${MantineSize}` | (string & {});
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MantineButton = ({
  variant = "filled",
  color,
  size = "md",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  const { primaryColor } = useMantineTheme();
  return (
    <Button
      variant={variant}
      color={color ? color : primaryColor}
      size={size}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
