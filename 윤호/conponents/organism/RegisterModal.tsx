import * as React from "react";
import { Box, Modal } from "@mui/material";
import RegisterBox from "../molecules/RegisterBox";
import { RegisterModalProp } from "@/app/util/registerModalType";

const RegisterModal = ({ open, handleClose }: RegisterModalProp) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 330,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <RegisterBox />
      </Box>
    </Modal>
  );
};

export default RegisterModal;
