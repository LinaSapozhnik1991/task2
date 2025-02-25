/* eslint-disable react/display-name */

import React, { FC, memo } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { InputSizes, InputTypes, InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input: FC<InputProps> = memo(
  ({
    id,
    value,
    children,
    placeholder = '',
    rounded = false,
    inputSize = InputSizes.Medium,
    error = '',
    disabled,
    onChange,
    onClear,
    showIcon = true,
    type = InputTypes.Text,
    maxLength,
    ...rest
  }) => {
    const inputClasses = classNames(
      styles.inputContainer,
      styles[inputSize],

      {
      
        [styles.disabled]: disabled,
      }
    );
    const inputFieldClasses = classNames(
      styles.input,
      {
        [styles.rounded]: rounded, 
        
        [styles.error]: !!error,
      }
    );
    return (
      <div className={inputClasses}>
        <label htmlFor={id} className={styles.label}>
          {children}
        </label>
        {showIcon && (
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} /> 
            </span>
          )}
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength}
          className={inputFieldClasses}
          aria-invalid={!!error}
          aria-disabled={disabled}
          {...rest}
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className={styles.clearIcon}
            aria-label="Очистить поле"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        {error && <span className={styles.errorMessage}></span>}
      </div>
    );
  }
);

export default Input;
