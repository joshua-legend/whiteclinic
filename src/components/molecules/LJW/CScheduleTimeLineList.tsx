import { Dayjs } from 'dayjs';
import CScheduleTimeLine from './CScheduleTimeLine';
import { CustomerInfo, engineerInfo, TODAY } from '@/constants/definition';

type CScheduleTimeLineListProps = {
  selectDate?: Dayjs | null;
  engineers?: engineerInfo[];
  orderInfo?: CustomerInfo[];
};

const CScheduleTimeLineList = ({
  selectDate = TODAY,
  engineers,
  orderInfo,
}: CScheduleTimeLineListProps) => {
  if (!engineers) {
    return <div></div>;
  }

  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  return (
    <div>
      {engineers.map((item, i) => (
        <CScheduleTimeLine
          key={i}
          engineerName={item.engineerName}
          selectDate={formattedDate}
          orderInfo={orderInfo}
        />
      ))}
    </div>
  );
};

export default CScheduleTimeLineList;
