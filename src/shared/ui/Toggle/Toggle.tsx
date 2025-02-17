import React from "react";
import classNames from "classnames";
import styles from "./Toggle.module.scss";

interface ToggleProps {
  isActive?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
  size?: "xs" | "small" | "medium" | "large";
  active?: boolean;
  hover?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  isActive = false,
  disabled = false,
  active,
  hover,
  onToggle,
  size = "medium",
}) => {
  const toggleClasses = classNames(
    styles.toggle,
    styles[size],

    {
      [styles.on]: isActive,
      [styles.disabled]: disabled,
      [styles.active]: active,
      [styles.hover]: hover,
    }
  );

  const sliderClasses = classNames(styles.slider, { [styles.on]: isActive });

  return (
    <div className={toggleClasses} onClick={!disabled ? onToggle : undefined}>
      <div className={sliderClasses} />
    </div>
  );
};

export default Toggle;
