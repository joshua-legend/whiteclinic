import * as React from 'react';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import { Box } from '@mui/material';
import ARegisterModal from '@/conponents/organism/Modal/ARegisterModal';

const TwoButtons = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: '574px',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ACustomButton text="취소" color="default" variant="contained" sx={{ width: '100%' }} />
      <ACustomButton
        text="등록"
        color="primary"
        variant="contained"
        sx={{ width: '100%' }}
        onClick={handleOpen}
      />
      <ARegisterModal
        modaltwoinputboxprops={{ title: '주문 정보를 등록하시겠습니까?', handleClose }}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default TwoButtons;
