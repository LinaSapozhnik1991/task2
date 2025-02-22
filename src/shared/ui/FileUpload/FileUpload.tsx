import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./FileUpload.module.scss";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  isActive?: boolean;
  isHovered?: boolean;
  error?: boolean;
  isUploading?: boolean;
  uploadProgress?: number,
 
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileChange,
  disabled = false,
  size = "medium",
  isActive = false,
  isHovered = false,
  error = false,
  isUploading = false,
 
  ...rest
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  const fileName = "File Upload";
  const fileSize = "3.32 MB";

  const handleRemoveFile = () => {
    onFileChange(null);
    setUploadProgress(0);
    setIsSimulatingUpload(false);
    setUploadMessage("");
    setIsUploadComplete(false);
  };

  useEffect(() => {
    if (isUploading) {
      setIsSimulatingUpload(true);
      setUploadProgress(0);
      setUploadMessage("Загрузка... 0%");
      setIsUploadComplete(false);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploadMessage("Загрузка завершена!");
            setIsSimulatingUpload(false);
            setIsUploadComplete(true);
            return 100;
          }
          const newProgress = prev + 10;
          setUploadMessage(`Загрузка... ${newProgress}%`);
          return newProgress;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isUploading]);

  return (
    <>
      {isSimulatingUpload && (
        <div className={styles.uploadStatus}>
          <span className={styles.uploadMessage}>{uploadMessage}</span>
        </div>
      )}

      <div
        className={classNames(styles.fileUpload, styles[size], {
          [styles.disabled]: disabled,
          [styles.active]: isActive,
          [styles.hover]: isHovered,
          [styles.error]: error,
          [styles.uploading]: isSimulatingUpload,
    
        })}
        {...rest }
      >
        <div className={styles.progressBar}>
          <div
            className={classNames(styles.progressFill)}
            style={{ width: `${uploadProgress}%` }}
          />
        </div>

        <label className={styles.uploadLabel}>
          <div className={styles.leftSection}>
            <FontAwesomeIcon icon={faFileAlt} className={styles.icon} />
            <span className={styles.fileName}>{fileName}</span>
          </div>
          <div className={styles.rightSection}>
            <span className={styles.fileSize}>{fileSize}</span>
            <button
              className={styles.removeButton}
              onClick={handleRemoveFile}
              aria-label="Remove file"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </label>

        {error && (
          <span className={styles.errorMessage}>
            Ошибка при загрузке файла!
          </span>
        )}
      </div>
      {isUploadComplete && (
        <span className={styles.uploadMessage}>Загрузка завершена!</span>
      )}
    </>
  );
};

export default FileUpload;
