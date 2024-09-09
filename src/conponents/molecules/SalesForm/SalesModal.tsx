import { Box, Modal } from '@mui/material';
import ModalContent, { ModalContentProps } from './ModalContent';

export type SalesModalProps = {
  open: boolean;
  handleClose: () => void;
  modalcontentprops: ModalContentProps;
};

const SalesModal = ({ open, handleClose, modalcontentprops }: SalesModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
        }}
      >
        <ModalContent {...modalcontentprops} />
      </Box>
    </Modal>
  );
};

export default SalesModal;
