import { Box, Typography } from '@mui/material';
import { CustomerTimeSlotProps } from '../ts/customerType';
import CustomerDetails from './CustomerDetails';

// 시간대에 맞는 고객 정보를 매핑하는 컴포넌트
const CustomerTimeSlot = ({ timeSlot, customer }: CustomerTimeSlotProps) => {
  return (
    <Box sx={{ display: 'flex', gap: '0.875rem' }}>
      <Box sx={{ width: '100px', height: '30px', padding: '3px', textAlign: 'center' }}>
        <Typography variant="subtitle1" component="span">
          {timeSlot}
        </Typography>
      </Box>
      <CustomerDetails customer={customer} />
    </Box>
  );
};

export default CustomerTimeSlot;
