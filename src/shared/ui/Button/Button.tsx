import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
  size?:
    | "large"
    | "medium"
    | "small"
    | "xs"
    | "miniLarge"
    | "miniMedium"
    | "miniSmall"
    | "miniXs";
  radius?: "Small" | "Big";
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
  onClick?: () => void;
  backgroundColor?:
    | "primary"
    | "secondary"
    | "clear"
    | "critical"
    | "critical-secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  radius = "Small",
  active,
  hover,
  children,
  disabled,
  onClick,
  backgroundColor,
}) => {
  const sizeTextMap = {
    large: "Large Button",
    medium: "Medium Button",
    small: "Small Button",
    xs: "XS Button",
    miniLarge: "+",
    miniMedium: "+",
    miniSmall: "+",
    miniXs: "+",
  };

  const buttonLabel = label || sizeTextMap[size];
  const classNam = classNames(
    styles.button,
    styles[size],
    styles[`radius-${radius}`],
    {
      [styles.disabled]: disabled,
      [styles.active]: active,
      [styles.hover]: hover,
      [styles[backgroundColor as keyof typeof styles]]: backgroundColor,
    }
  );

  return (
    <button
      className={classNames(
        classNam,
        styles.button,
        backgroundColor,
        styles[size]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonLabel || children}
    </button>
  );
};

export default Button;
