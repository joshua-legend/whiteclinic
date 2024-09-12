import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';

type CShowListProps = {
  selectDate?: Dayjs | null;
};
const CShowList = ({ selectDate }: CShowListProps) => {
  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  return (
    <Box
      sx={{
        width: '150px',
        height: '450px',
        padding: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    ></Box>
  );
};

export default CShowList;
