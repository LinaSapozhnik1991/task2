import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './AddFiles.module.scss';
import FileUploader from '../../../../shared/ui/FileUploader/FileUploader'; 
import FileUpload from '../../../../shared/ui/FileUpload/FileUpload'; 
import { Button } from '../../../../shared/ui/Button/Button'; 
import { ButtonColors } from '../../../../shared/ui/Button/Button.types';

interface AddFileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddFileModal: React.FC<AddFileModalProps> = ({ isOpen, onClose }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    if (!isOpen) return null;

    const handleFileChange = (files: File[]) => {
        setSelectedFiles(files); 
    };

    const handleAddFile = () => {
        if (selectedFiles.length === 0) return;

        setIsUploading(true); 

        const totalFiles = selectedFiles.length;
        selectedFiles.forEach((file, index) => {
            const uploadFile = () => {
                let progress = 0;

                const interval = setInterval(() => {
                    if (progress < 100) {
                        progress += 10; 
                    } else {
                        clearInterval(interval);
                        if (index === totalFiles - 1) {
                            setIsUploading(false); 
                            onClose(); 
                        }
                    }
                }, 300); 
            };

            uploadFile();
        });
    };

    return ReactDOM.createPortal(
        <div className={styles.overlayStyle}>
            <div className={styles.modalStyle}>
                <h2>Добавить файлы</h2>
                <div className={styles.modalContent}>
                {isUploading ? (
                    selectedFiles.map((file, index) => ( // Добавлено 'index' как второй аргумент
                        <FileUpload
                            key={file.name}
                            onFileChange={() => {}} 
                            isUploading={isUploading}
                            uploadProgress={(index + 1) * 10} // Передаем прогресс загрузки
                        />
                    ))
                ) : (
                    <FileUploader onFileChange={handleFileChange} />
                )}
                </div>
                <div className={styles.buttonContainerStyle}>
                    <Button 
                      style={{ width: "264px" }} backgroundColor={ButtonColors.Primary} onClick={handleAddFile} disabled={isUploading}>
                        Добавить
                    </Button>
                    <Button
                    style={{ width: "264px" }} backgroundColor={ButtonColors.Secondary} onClick={onClose}>
                        Отмена
                    </Button>
                </div>
            </div>
        </div>,
        document.body 
    );
};

export default AddFileModal;
