import ABasicInput from '@/conponents/atom/Input/Basic/ABasicInput';
import ADatesSelector from '@/conponents/molecules/Select/ADateSelector';
import AMonthSelector from '@/conponents/molecules/Select/AMonthSelector';

import { Box } from '@mui/material';

const DateDropList = () => {
  return (
    <Box
      sx={{
        width: 462,
        height: 57,
        display: 'flex',
        p: 1,
        gap: 1,
        borderBottom: '1px solid #7F7F7F',
      }}
    >
      <ABasicInput label="년(4자)" variant="outlined" />
      <AMonthSelector />
      <ADatesSelector />
    </Box>
  );
};

export default DateDropList;
