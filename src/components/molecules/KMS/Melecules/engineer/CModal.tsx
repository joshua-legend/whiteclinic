import { Box, Modal, Typography } from '@mui/material';
import { ButtoModalTextType, modalProps } from '@/constants/definition';

export const CModal = ({ open = false, title, children }: modalProps) => {
  return (
    <Modal
      sx={{
        position: 'absolute' as 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 415,
        height: 70,
        border: '1px solid #000',
        boxShadow: 24,
        backgroundColor: 'whitesmoke',
        p: 4,
      }}
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
