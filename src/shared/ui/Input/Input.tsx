import styles from "./Input.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export interface InputProps {
  label: string;
  value?: string;
  placeholder: string;
  radius?: "Small" | "Big";
  size?: "small" | "medium" | "large";
  hover?: boolean;
  active?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClear?: () => void;
  type?: string;
  maxLength?: number;
  isTextarea?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  active,
  hover,
  disabled,
  size = "medium",
  radius = "Small",
  error,
  onChange,
  onClear,
  type = "text",
  maxLength,
  isTextarea = false,
}) => {
  const sizeTextMap = {
    large: "Large Label",
    medium: "Medium Label",
    small: "Small Label",
  };
  const sizePlaceholderMap = {
    large: "Large Input",
    medium: "Medium Input",
    small: "Small Input",
  };
  const buttonLabel = label || sizeTextMap[size];
  const placeholderInput = placeholder || sizePlaceholderMap[size];
  const className = classNames(
    styles.input,
    styles[size],
    styles[`radius-${radius}`],
    {
      [styles.disabled]: disabled,
      [styles.active]: active,
      [styles.hover]: hover,
      [styles.focus]: focus,
      [styles.error]: error,
    }
  );

  return (
    <div className={styles.inputContainer}>
      {buttonLabel && <label className={styles.label}>{buttonLabel}</label>}
      <div className={styles.inputWrapper}>
        {isTextarea ? (
          <textarea
            className={classNames(className, styles.textarea)}
            value={value}
            placeholder={placeholderInput}
            disabled={disabled}
            onChange={onChange}
            style={{ width: "340px", height: "80px" }}
          />
        ) : (
          <>
            {!error && (
              <FontAwesomeIcon
                icon={faSearch}
                className={styles.icon}
                aria-label="Search icon"
              />
            )}
            <input
              className={className}
              value={value}
              placeholder={placeholderInput}
              disabled={disabled}
              onChange={onChange}
              type={type}
              maxLength={maxLength}
            />
            {value && !error && (
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.clearIcon}
                onClick={onClear}
                aria-label="Clear input"
              />
            )}
          </>
        )}
      </div>
      {error && <span className={styles.errorMessage}>Ошибка ввода</span>}
    </div>
  );
};

export default Input;
