import { Box, Typography } from '@mui/material';
import { workTimeLine } from './workTimeLine';

type customerInfo = {
  customerName: string;
  customerContact: string;
  customerAddress: string;
  cleaningItem: string;
  cleaningType: string;
  modelEA: number;
  totalPrice: number;
};

type EngineerContentProps = {
  engineerName: string;
  orderInfo?: customerInfo[];
};

//고객 정보 출력 컴포넌트
const CustomerDetails = ({ customer }: { customer?: customerInfo }) => {
  if (!customer) {
    return <div> </div>;
  }

  return (
    <div>
      {customer.customerName} - {customer.customerContact} - {customer.customerAddress} -
      {customer.cleaningType} - {customer.modelEA} - {customer.totalPrice}
    </div>
  );
};

// 시간대에 맞는 고객 정보를 매핑하는 컴포넌트
const CustomerTimeSlot = ({
  timeSlot,
  customer,
}: {
  timeSlot: string;
  customer?: customerInfo;
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '0.875rem' }}>
      <Typography variant="subtitle1" component="strong">
        {timeSlot}
      </Typography>
      <CustomerDetails customer={customer} />
    </Box>
  );
};

const EngineerContent = ({ engineerName, orderInfo }: EngineerContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        BackgroundColor: '#3399ff',
        border: '1px solid black',
      }}
    >
      <Typography variant="h5" noWrap component="div" sx={{ color: '#fffffff' }}>
        {engineerName} 기사
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {workTimeLine && workTimeLine.length > 0 ? (
          workTimeLine.map((timeSlot, index) => {
            const customer = orderInfo?.find((order) => order.cleaningItem === timeSlot.label);
            return <CustomerTimeSlot key={index} timeSlot={timeSlot.label} customer={customer} />;
          })
        ) : (
          <Typography variant="body1" sx={{ color: '#ffffff' }}>
            정보 없음.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default EngineerContent;
