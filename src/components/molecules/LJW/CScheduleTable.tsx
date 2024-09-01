import { theme } from '@/constants/theme';
import { Box, ThemeProvider } from '@mui/material';
import CEngineerTitle from './CEngineerTitle';
import { CustomerInfo } from '@/constants/definition';
import CScheduleTimeLine from './CScheduleTimeLine';

type CScheduleTableProps = {
  engineerName: string;
  engineerDate: string;
  orderInfo?: CustomerInfo[];
};
const CScheduleTable = ({ engineerName, engineerDate, orderInfo }: CScheduleTableProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <CEngineerTitle engineerName={engineerName} />
        <CScheduleTimeLine engineerDate={engineerDate} orderInfo={orderInfo} />
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTable;
