import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';

type CShowListProps = {
  children: React.ReactNode;
};
const CShowList = ({ children }: CShowListProps) => {
  return (
    <Box
      sx={{
        width: '300px',
        height: '550px',
        padding: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        border: '1px solid #bdbdbd',
        borderRadius: '6px',
        overflow: 'scroll',
      }}
    >
      {children}
    </Box>
  );
};

export default CShowList;
