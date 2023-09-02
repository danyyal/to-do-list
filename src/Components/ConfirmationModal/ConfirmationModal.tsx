import React, { useState } from "react";
import "./ConfirmationModal.scss";
import { ModalProps } from "../../Types/Modal";

const ConfirmationModal = ({ message, onConfirm }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <p>{message}</p>
          <div className="modal-buttons">
            <button
              className="confirm-button"
              onClick={() => {
                onConfirm();
                setIsOpen(false);
              }}
            >
              Confirm
            </button>
            <button className="cancel-button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <button className="item" onClick={() => setIsOpen(!isOpen)}>
        Delete
      </button>
    </>
  );
};

export default ConfirmationModal;
