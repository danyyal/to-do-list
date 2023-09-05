import React from "react";
import "./ConfirmationModal.scss";
import { ModalProps } from "../../Types/Modal";

const ConfirmationModal = ({
  message,
  onConfirm,
  isOpen,
  setIsOpen,
}: ModalProps) => {
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
    </>
  );
};

export default ConfirmationModal;
