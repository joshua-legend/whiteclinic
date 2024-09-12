import { engineerInfo } from '@/constants/definition';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

type CDateEngineerProps = {
  selectDate: string;
  selectDay: string;
  engineer?: engineerInfo[];
  onEngineerClick: (engineer: engineerInfo) => void;
};
const CDateEngineer = ({
  selectDate,
  selectDay,
  engineer,
  onEngineerClick,
}: CDateEngineerProps) => {
  console.log('기사 정보', selectDate, selectDay, engineer);
  if (!engineer) {
    return <div></div>;
  }

  const filterEngineer = engineer.filter(
    (engineer) =>
      engineer.engineerClosedDate !== selectDate && engineer.engineerClosedDay !== selectDay
  );

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {filterEngineer.map((order) => (
        <Box key={order.engineerName} onClick={() => onEngineerClick(order)}>
          {order.engineerName}
        </Box>
      ))}
    </Box>
  );
};

export default CDateEngineer;
