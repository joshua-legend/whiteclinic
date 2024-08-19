import { Box, Typography } from '@mui/material';
import { workTimeLine } from '../workTimeLine';
import CustomerTimeSlot from './CustomerTimeSlot';
import { CustomerTimeSlotListProps } from '../ts/customerType';

//고객과 기사의 time을 매핑한 결과를 화면에 출력시키는 컴포넌트
const CustomerTimeSlotList = ({ engineerDate, orderInfo }: CustomerTimeSlotListProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {workTimeLine && workTimeLine.length > 0 ? (
        workTimeLine.map((timeSlot, index) => {
          const customer = orderInfo?.find(
            (order) =>
              order.appointmentTime === timeSlot.label && order.appointmentDate === engineerDate
          );
          return <CustomerTimeSlot key={index} timeSlot={timeSlot.label} customer={customer} />;
        })
      ) : (
        <Typography variant="body1" sx={{ color: '#ffffff' }}>
          정보 없음.
        </Typography>
      )}
    </Box>
  );
};

export default CustomerTimeSlotList;
