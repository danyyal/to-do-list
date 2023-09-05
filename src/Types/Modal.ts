export type ModalProps = {
  message: string;
  onConfirm: () => void;
  isInfoModal?: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
