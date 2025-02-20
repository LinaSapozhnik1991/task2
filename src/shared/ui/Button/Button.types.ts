import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonColors {
  Primary = "primary",
  Secondary = "secondary",
  Clear = "clear",
  Critical = "critical",
  CriticalSecondary = "critical-secondary",
}

export type ButtonColor =
  | ButtonColors.Primary
  | ButtonColors.Secondary
  | ButtonColors.Clear
  | ButtonColors.Critical
  | ButtonColors.CriticalSecondary;

export enum ButtonSizes {
  Large = "large",
  Medium = "medium",
  Small = "small",
  XS = "xs",
}
export type ButtonSize =
  | ButtonSizes.Large
  | ButtonSizes.Medium
  | ButtonSizes.Small
  | ButtonSizes.XS;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: ButtonColor;
  size?: ButtonSize;
  radius?: boolean;
  disabled?: boolean;
  className?: string;
  mini?: boolean;
  children: ReactNode;
  as?: React.ElementType;
}
