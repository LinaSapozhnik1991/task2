import React from "react";
import ReactDOM from "react-dom";
import styles from "./DeleteFile.module.scss";
import Button from "../../../../shared/ui/Button/Button";
import { ButtonColors } from "../../../../shared/ui/Button/Button.types";

interface DeleteFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteFileModal: React.FC<DeleteFileModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Удалить файл?</h3>
        <p>Файл будет удалён безвозвратно</p>
        <div className={styles.buttonGroup}>
          <Button
            backgroundColor={ButtonColors.CriticalSecondary}
            style={{ width: "276px" }}
            onClick={onConfirm}
          >
            Удалить
          </Button>
          <Button
            backgroundColor={ButtonColors.Secondary}
            style={{ width: "276px" }}
            onClick={onClose}
          >
            Отмена
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteFileModal;
