import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import usePortal from "../hooks/usePortal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const portalRoot = usePortal("modal-root");

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !portalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal} ref={modalRef} tabIndex={-1}>
        {children}
      </div>
    </>,
    portalRoot
  );
};

export default Modal;
