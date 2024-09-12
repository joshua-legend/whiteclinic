import { engineerInfo } from '@/constants/definition';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

type CDateEngineerProps = {
  selectDate: Dayjs | null;
  engineer?: engineerInfo[];
};
const CDateEngineer = ({ selectDate, engineer }: CDateEngineerProps) => {
  if (!engineer) {
    return <div></div>;
  }
  const selectDay = selectDate?.locale('ko').format('ddd');
  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  const filterEngineer = engineer.filter(
    (engineer) =>
      engineer.engineerClosedDate !== formattedDate && engineer.engineerClosedDay !== selectDay
  );
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {filterEngineer.map((order) => (
        <Box>`${order.engineerName}</Box>
      ))}
    </Box>
  );
};

export default CDateEngineer;
