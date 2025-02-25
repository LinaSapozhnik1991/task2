import React, { FC, memo } from "react";
import classNames from "classnames";
import { InputSizes, TextareaProps } from "../Input/Input.types"; 
import styles from "./Textarea.module.scss";

// eslint-disable-next-line react/display-name
const Textarea: FC<TextareaProps> = memo(({
    id,
    value,
    placeholder,
    inputSize = InputSizes.Medium,
    error = '',
    disabled,
    onChange,
    showLabel = true,
    maxLength,
    ...rest
}) => {
   
    const textareaClasses = classNames(
        styles.textarea, 
        styles[inputSize], 
        {
            
            [styles.error]: !!error, 
            [styles.disabled]: disabled, 
        }
    );
    const labelTexts = {
        [InputSizes.Large]: "Large label",
        [InputSizes.Medium]: "Medium label",
        [InputSizes.Small]: "Small label",
    };
    return (
        <div className={styles.textareaContainer}>
        {showLabel && (
            <label htmlFor={id}>{labelTexts[inputSize]}</label> 
        )}
        <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            className={textareaClasses} 
            disabled={disabled}
            {...rest}
        />
        {error && <span className={styles.errorMessage}>Ошибка!</span>} 
    </div>
    );
});

export default Textarea;
