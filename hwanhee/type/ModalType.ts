import { ReactNode } from "react";

export type ModalTitelProps = {
    title: string;
  };
  export type ModalContentProps = {
    content: string;
  };
  export type ModalActionProps = {
    confirmText: string;
    onConfirm: () => void;
  };
  
  export type ModalProps = {
    open: boolean;
    onClose: () => void;

  };

export type CustomModalProps = ModalTitelProps & ModalContentProps &ModalActionProps &ModalProps;