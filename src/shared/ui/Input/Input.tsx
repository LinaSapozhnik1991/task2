import React, { FC } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { InputSizes, InputTypes, InputProps } from "./Input.types";
import styles from "./Input.module.scss";

// eslint-disable-next-line react/display-name
export const Input: FC<InputProps> = ({
  id,
  value,
  placeholder,
  radius = false,
  inputSize = InputSizes.Medium,
  error = false,
  onChange,
  onClear,
  type = InputTypes.Text,
  maxLength,
  ...rest
}) => {
  const inputClasses = classNames(styles.inputContainer, styles[inputSize], {
    [styles.radius]: radius,
    [styles.error]: error,
  });

  return (
    <div className={inputClasses}>
      <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        className={styles.input}
        {...rest}
      />
      {value && (
        <button type="button" onClick={onClear} className={styles.clearIcon}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      {error && <span className={styles.errorMessage}>Ошибка!</span>}
    </div>
  );
};

export default Input;
