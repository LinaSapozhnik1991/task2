import styles from "./Button.module.scss";
import { FC, memo } from "react";
import classNames from "classnames";
import { ButtonProps, ButtonColors, ButtonSizes } from "./Button.types";

// eslint-disable-next-line react/display-name
export const Button: FC<ButtonProps> = memo(
  ({
    backgroundColor = ButtonColors.Primary,
    children,
    className = "",
    size = ButtonSizes.Medium,
    mini = false,
    radius = false,
    disabled = false,
    as: Component = "button",
    type = "button",
    ...rest
  }) => {
    const buttonClass = classNames(
      styles.button,
      {
        [styles.mini]: mini,
        [styles.disabled]: disabled,
        [styles.radius]: radius,
        [styles[backgroundColor]]: backgroundColor,
        [styles[size]]: size,
      },
      className
    );
    const renderButtonText = () => {
      if (children) return null;

      if (mini) return "+";
      switch (size) {
        case ButtonSizes.Large:
          return "Large Button";
        case ButtonSizes.Medium:
          return "Medium Button";
        case ButtonSizes.Small:
          return "Small Button";
        case ButtonSizes.XS:
          return "";
        default:
          return "Button";
      }
    };
    return (
      <Component className={buttonClass} type={type} {...rest}>
        {renderButtonText()}
        {children}
      </Component>
    );
  }
);

export default Button;
