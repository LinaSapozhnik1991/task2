import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  id: number; 
  state?: "default" | "checked" | "plus" | "minus";
  size?: "large" | "medium" | "small" | "xsmall";
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
  onClick?: () => void; 
  label?: string; 
  children?: CheckboxProps[];
  className?: string; 
}

const Checkbox: React.FC<CheckboxProps> = ({
  state = "default",
  disabled = false,
  active = false,
  hover = false,
 
  size = "medium",
  label, 
}) => {
  const getIcon = () => {
    switch (state) {
      case "checked":
        return (
          <FontAwesomeIcon icon={faCheck} className={styles.checkedIcon} />
        );
      case "plus":
        return <FontAwesomeIcon icon={faPlus} className={styles.plusIcon}/>;
      case "minus":
        return <FontAwesomeIcon icon={faMinus} className={styles.minusIcon}/>;
      default:
        return null;
    }
  };
const icon = getIcon();
  const checkboxClasses = classNames(
    styles.checkbox,
    styles[state],
    styles[size],
    { [styles.special]: state === "checked" },
    { [styles.disabled]: disabled },
    { [styles.active]: active },
    { [styles.hover]: hover }
  );

  return (
    <label className={checkboxClasses}>
    <div className={styles.iconContainer}>{icon}</div>
    {label && (
      <span className={classNames(styles.label, { [styles.noIcon]: !icon })}>
        {label}
      </span>
    )}
  </label>
  );
};

export default Checkbox;
