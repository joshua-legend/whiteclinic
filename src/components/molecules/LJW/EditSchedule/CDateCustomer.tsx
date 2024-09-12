import { CustomerInfo, CustomerTimeMappingProps } from '@/constants/definition';
import { Box } from '@mui/material';
import CCustomerInfoContent from '../ShowSchedule/CCustomerInfoContent';
import { Dayjs } from 'dayjs';

const CDateCustomer = ({ selectDate, orderInfo }: CustomerTimeMappingProps) => {
  console.log('고객정보', selectDate, orderInfo);
  if (!orderInfo) {
    return <div></div>;
  }

  const filterOrder = orderInfo.filter((order) => order.appointmentDate === selectDate);
  return (
    <Box>
      {filterOrder.map((order, index) => (
        <CCustomerInfoContent key={index} customer={order} />
      ))}
    </Box>
  );
};

export default CDateCustomer;
