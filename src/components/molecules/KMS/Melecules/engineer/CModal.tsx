import { Box, Modal, Typography } from '@mui/material';
import { ButtoModalTextType, modalProps } from '@/constants/definition';

const CModalStyle = {
  position: 'absolute' as 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 415,
  height: 70,
  border: '1px solid #000',
  boxShadow: 24,
  backgroundColor: 'whitesmoke',
  p: 4,
};

export const CModal = ({ open = false, title, children }: modalProps) => {
  return (
    <Modal open={open}>
      <Box sx={{ ...CModalStyle }}>
        <Typography variant="h6">{title}</Typography>
        <Box>{children}</Box>
      </Box>
    </Modal>
  );
};
