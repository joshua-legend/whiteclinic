import { EngineerContentProps } from '../ts/customerType';
import { theme } from '../ts/theme';
import { Box, ThemeProvider } from '@mui/material';
import TitleHeader from './TitleHeader';
import CustomerTimeSlotList from './CustomerTimeSlotList';

const EngineerContent = ({ engineerName, engineerDate, orderInfo }: EngineerContentProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <TitleHeader content={engineerName} />
        <CustomerTimeSlotList engineerDate={engineerDate} orderInfo={orderInfo} />
      </Box>
    </ThemeProvider>
  );
};

export default EngineerContent;
