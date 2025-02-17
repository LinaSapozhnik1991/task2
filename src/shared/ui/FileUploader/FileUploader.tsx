import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./FileUploader.module.scss";
import Button from "../Button/Button";

interface FileUploaderProps {
  onFileChange: (file: File | null) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  error?: boolean;
  hover?: boolean;
  active?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileChange,
  disabled = false,
  size = "medium",
  error = false,
  hover = false,
  active = false,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);
  };

  return (
    <>
      <div
        className={classNames(styles.fileUploader, styles[size], {
          [styles.disabled]: disabled,
          [styles.hover]: hover,
          [styles.active]: active,
          [styles.error]: error,
        })}
      >
        <div className={styles.uploadContainer}>
          <FontAwesomeIcon icon={faCloudDownload} className={styles.icon} />
          <span className={styles.label}>Перетащите файл сюда или</span>
          <input
            type="file"
            onChange={handleFileChange}
            disabled={disabled}
            className={styles.fileInput}
            aria-label="Upload file"
          />
        </div>
        <div className={styles.button}>
          <Button
            size={size}
            label=""
            backgroundColor={active ? "secondary" : "clear"}
            disabled={disabled}
            active={active}
          />
        </div>
      </div>

      {error && (
        <span className={styles.errorMessage}>Ошибка загрузки файла</span>
      )}
    </>
  );
};

export default FileUploader;
