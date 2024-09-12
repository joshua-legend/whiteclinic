import { Dayjs } from 'dayjs';
import CScheduleTimeLine from './CScheduleTimeLine';
import { CustomerInfo, engineerInfo, TODAY } from '@/constants/definition';
import { filterOrdersForEngineer } from '@/util/dateUtil';
import { Box } from '@mui/material';

type CScheduleTimeLineListProps = {
  selectDate?: Dayjs | null;
  engineers?: engineerInfo[];
  orderInfo?: CustomerInfo[];
};

const CScheduleTimeLineList = ({
  selectDate,
  engineers,
  orderInfo,
}: CScheduleTimeLineListProps) => {
  if (!engineers) {
    return <div></div>;
  }

  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  console.log('timeLineLIstData:', formattedDate, engineers, orderInfo);
  return (
    <Box>
      {engineers.map((engineer, i) => {
        // console.log('엔지티어 이름과 예약 정보:', engineer.engineerName, filteredOrderInfo);
        return (
          <CScheduleTimeLine
            key={i}
            engineerName={engineer.engineerName}
            selectDate={formattedDate}
            orderInfo={filterOrdersForEngineer(orderInfo, engineer.engineerName, formattedDate)}
          />
        );
      })}
    </Box>
  );
};

export default CScheduleTimeLineList;
