'use client'
import { useState } from 'react';
import styles from '../scss/page.module.scss'
import AddFileModal from '@/widgets/modals/files/addFile';


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);

  }

 

  return (
    <div className={styles.page}>
     
     <button onClick={handleOpenModal}>Добавить файл</button>
     <AddFileModal isOpen={isModalOpen} onClose={handleCloseModal} />
   
    </div>
  );
};

