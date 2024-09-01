import { theme } from '@/constants/theme';
import { Box, ThemeProvider } from '@mui/material';
import CEngineerTitle from './CEngineerTitle';
import { CustomerInfo } from '@/constants/definition';
import CScheduleTimeMapping from './CScheduleTimeMapping';

type CScheduleTimeLineProps = {
  engineerName: string;
  engineerDate: string;
  orderInfo?: CustomerInfo[];
};
const CScheduleTimeLine = ({ engineerName, engineerDate, orderInfo }: CScheduleTimeLineProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <CEngineerTitle engineerName={engineerName} />
        <CScheduleTimeMapping engineerDate={engineerDate} orderInfo={orderInfo} />
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTimeLine;
