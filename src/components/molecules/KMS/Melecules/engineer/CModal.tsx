import { Box, Modal, Typography } from '@mui/material';
import { ButtoModalTextType, modalProps } from '@/constants/definition';
import { Directions } from '@mui/icons-material';
import { CModalStyle } from '@/styles/customize';

export const CModal = ({ open = false, title, children }: modalProps) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={CModalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Box id="modal-modal-description">{children}</Box>
      </Box>
    </Modal>
  );
};
