import { CustomerTimeSlotListProps } from '@/app/ui/(Bteam)atomize/schedule_table/ts/customerType';
import { Box } from '@mui/material';

const CustomerIsTime = ({ engineerDate, orderInfo }: CustomerTimeSlotListProps) => {
  const customer = orderInfo?.find((order) => order);
  return <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>;
};

export default CustomerIsTime;
