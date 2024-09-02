import CButton from '@/components/atom/CButton';
import { Box } from '@mui/material';

const SalesInfoButtons = () => {
  const handleCancle = () => {
    console.log('cancle button clicked');
  };

  const handleSubmit = () => {
    console.log('submit button clicked');
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      {<CButton content="취소" handleClick={handleCancle} type="button" />}
      {<CButton content="등록" handleClick={handleSubmit} type="submit" />}
    </Box>
  );
};

export default SalesInfoButtons;
