import React, { FC, useState } from "react";
import styles from "./AddFolder.module.scss";
import { Button } from "../../../shared/ui/Button/Button";
import { ButtonColors } from "../../../shared/ui/Button/Button.types";
import { Input } from "@/shared/ui/Input";
import { InputTypes } from "@/shared/ui/Input/Input.types";
import Modal from "@/shared/Modal";
import Textarea from "@/shared/ui/Textarea/Textarea";

const AddFolder: FC<{
  isOpen: boolean;
  onClose: () => void;
  onCreateFolder: () => void;
}> = ({ isOpen, onClose, onCreateFolder }) => {
  const [folderName, setFolderName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{
    folderName?: string;
    description?: string;
  }>({});

  const handleCreateFolder = () => {
    if (validateInputs()) {
      console.log("Создание папки:", folderName, description);
      setFolderName("");
      setDescription("");
      setErrors({});
      onCreateFolder();
      onClose();
    }
  };

  const setError = (
    field: keyof typeof errors,
    message: string | undefined
  ) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
  };

  const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFolderName(newValue);

    if (!newValue) {
      setError("folderName", "Обязательное поле");
    } else if (newValue.length > 100) {
      setError("folderName", "Максимум 100 символов");
    } else {
      setError("folderName", undefined);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    setDescription(newValue);

    if (newValue.length > 225) {
      setError("description", "Максимум 225 символов");
    } else {
      setError("description", undefined);
    }
  };

  const validateInputs = () => {
    const newErrors: { folderName?: string; description?: string } = {};

    if (!folderName) {
      newErrors.folderName = "Обязательное поле";
    } else if (folderName.length > 100) {
      newErrors.folderName = "Максимум 100 символов";
    }

    if (description.length > 225) {
      newErrors.description = "Максимум 225 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.drawer}>
        <div className={styles.content}>
          <div className={styles.inputGroup}>
            <h2>Создать папку</h2>
            <p>Отличный способ сгруппировать нужные вам файлы</p>
            <label>
              Название папки
              <Input
                type={InputTypes.Text}
                value={folderName}
                style={{ width: "536px" }}
                showIcon={false}
                error={errors.folderName}
                onChange={handleFolderNameChange}
                maxLength={100}
                required
              />
              {errors.folderName && (
                <span className={styles.error}>{errors.folderName}</span>
              )}
            </label>
            <label>
              Описание
              <Textarea
                showLabel={false}
                value={description}
                style={{ width: "536px" }}
                error={errors.description}
                onChange={handleDescriptionChange}
                maxLength={225}
              />
              {errors.description && (
                <span className={styles.error}>{errors.description}</span>
              )}
            </label>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              type="submit"
              style={{ width: "264px" }}
              backgroundColor={ButtonColors.Primary}
              onClick={handleCreateFolder}
            >
              Создать
            </Button>
            <Button
              type="button"
              style={{ width: "264px" }}
              backgroundColor={ButtonColors.Secondary}
              onClick={onClose}
            >
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddFolder;
