import { modalStyle } from "@/styles/ModalStyle";
import { ModalProps } from "@/util/type/ModalType";
import { Box } from "@mui/material";
import Modal from '@mui/material/Modal';

const ModalBox: React.FC<ModalProps & { content: React.ReactNode }> = ({ open, onClose, content }) => (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
    <Box sx={modalStyle}>{content}</Box>

    </Modal>
  );
export default ModalBox;
