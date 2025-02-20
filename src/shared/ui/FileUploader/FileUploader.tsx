import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./FileUploader.module.scss";
import { Button } from "../Button/Button";
import { ButtonColors, ButtonSizes } from "../Button/Button.types"; 

interface FileUploaderProps {
  onFileChange: (file: File | null) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  error?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileChange,
  disabled = false,
  size = "medium",
  error = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileChange(file);
  };

  const handleClear = () => {
    setSelectedFile(null);
    onFileChange(null);
  };

  return (
    <div
      className={classNames(styles.fileUploader, styles[size], {
        [styles.disabled]: disabled,
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
      {selectedFile && (
        <div className={styles.selectedFile}>
          <span>Выбранный файл: {selectedFile.name}</span>
        </div>
      )}
      <div className={styles.button}>
        <Button
          type="button"
          size={ButtonSizes.Large}
          backgroundColor={ButtonColors.Clear}
          onClick={handleClear}
          aria-label="Очистить"
        >
          Нажмите здесь
        </Button>
      </div>
    </div>
  );
};

export default FileUploader;
