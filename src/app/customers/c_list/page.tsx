import SalesInfo from '@/conponents/organism/Sales/SalesInfo';
import { Box } from '@mui/material';

const Page = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 112px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SalesInfo />
    </Box>
  );
};

export default Page;
