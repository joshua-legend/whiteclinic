import { CustomModalProps } from "@/util/type/ModalType";
import CustomButton from "../atom/Button";
import ModalBox from "../atom/Modal";
import ModalContent from "../atom/ModalContent";
import ModalTitle from "../atom/ModalTitle";
import ModalAction from "./ModalAction";


const CustomModal = ({ open,
    onClose,
    title,
    content,
    confirmText,
    onConfirm}: CustomModalProps) => {

        const modalContent = (
            <>
              <ModalTitle title={title} />
              <ModalContent content={content} />
              <ModalAction confirmText={confirmText} onConfirm={onConfirm} />
            </>
          );
        
          return (
            <ModalBox open={open} onClose={onClose} content={modalContent} />

          );
        };
export default CustomModal;