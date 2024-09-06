import { Box, Modal, Typography } from '@mui/material';
import { ButtoModalTextType, modalProps } from '@/constants/definition';

export const CModal = ({ open = false, title, children }: modalProps) => {
  return (
    <Modal
      open={open}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...CModal }}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};
