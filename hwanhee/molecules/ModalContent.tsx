import { CustomModalProps } from "@/util/type/ModalType";
import ModalTitle from "../atom/ModalTitle";
import ModalContent from "../atom/ModalContent";
import ModalAction from "./ModalAction";

const modalContent =({confirmText, content, onConfirm, title}:CustomModalProps)=> (
    <>
      <ModalTitle title={title} />
      <ModalContent content={content} />
      {/* <ModalAction onClick={onConfirm} text={confirmText} variant="contained"/> */}
    </>
  );

  export default modalContent;