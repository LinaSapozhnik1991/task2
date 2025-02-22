import React from "react";
import ReactDOM from "react-dom";
import styles from "./DeleteFolder.module.scss"; 
import Button from "../../../../shared/ui/Button/Button";
import { ButtonColors } from "../../../../shared/ui/Button/Button.types";

interface DeleteFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteFolderModal: React.FC<DeleteFolderModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Удалить папку?</h3>
        <p>Удаление повлечет за собой потерю всех данных по этой папке</p>
        <div className={styles.buttonGroup}>
          <Button
          style={{ width: "276px" }} backgroundColor={ButtonColors.CriticalSecondary} onClick={onConfirm}>
            Удалить
          </Button>
          <Button 
          style={{ width: "276px" }}
          backgroundColor={ButtonColors.Secondary} onClick={onClose}>
            Отмена
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteFolderModal;
