import { ModalContentProps } from "@/util/type/ModalType";
import { Typography } from "@mui/material";

const ModalContent = ({content}:ModalContentProps) =>{
    return (
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>
      );
}

export default ModalContent;