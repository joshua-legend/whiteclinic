import * as React from "react";
import { Box, Modal } from "@mui/material";
import { RegisterModalProp } from "@/app/util/registerModalType";
import { ModalMuiStyle } from "@/app/styles/mui";
import ModalTwoInputBox from "../molecules/ModalTwoInputBox";

const RegisterModal = ({
  open,
  handleClose,
  modaltwoinputboxprops,
}: RegisterModalProp) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...ModalMuiStyle }}>
        <ModalTwoInputBox {...modaltwoinputboxprops} />
      </Box>
    </Modal>
  );
};

export default RegisterModal;
