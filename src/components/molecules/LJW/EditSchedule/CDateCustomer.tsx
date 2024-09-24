import { CustomerInfo, CustomerTimeMappingProps } from '@/constants/definition';
import { Box } from '@mui/material';
import CCustomerInfoContent from '../ShowSchedule/CCustomerInfoContent';

type CDateCustomerProps = {
  selectDate: string;
  orderInfo?: CustomerInfo[];
  onCustomerClick: (customer: CustomerInfo) => void;
};

//선택한 날의 모든 주문 정보를 불러오는 컴포넌트
const CDateCustomer = ({ selectDate, orderInfo, onCustomerClick }: CDateCustomerProps) => {
  console.log('고객정보', selectDate, orderInfo);
  if (!orderInfo) {
    return <div></div>;
  }

  const filterOrder = orderInfo.filter((order) => order.appointmentDate === selectDate);
  return (
    <Box>
      {filterOrder.map((order, index) => (
        <Box key={index} onClick={() => onCustomerClick(order)}>
          <CCustomerInfoContent customer={order} />
        </Box>
      ))}
    </Box>
  );
};

export default CDateCustomer;
