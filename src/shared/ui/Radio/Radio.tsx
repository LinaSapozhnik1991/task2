import React from "react";
import styles from "./Radio.module.scss";
import classNames from "classnames";

interface RadioProps {
  id: string;
  size: "xsmall" | "small" | "medium" | "large";
  label: string;
  active?: boolean;
  hover?: boolean;
  isDefault?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
  id,
  size,
  label,
  isDefault = true,
  active = false,
  hover = false,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const radioClass = classNames(styles.radio, {
    [styles.disabled]: disabled,
    [styles.active]: active,
    [styles.hover]: hover,
    [styles.default]: isDefault,
  });
  return (
    <label className={radioClass} htmlFor={id}>
      <input
        type="radio"
        id={id}
        className={`${styles.visuallyHidden}`}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <div
        className={`${styles.circle} ${styles[size]} ${
          checked ? styles.checked : ""
        }`}
      >
        <div
          className={`${styles.innerCircle} ${checked ? styles.visible : ""} ${
            styles[size]
          }`}
        ></div>
      </div>
      <span>{label}</span>
    </label>
  );
};

export default Radio;
