import { CustomerTimeSlotProps } from '@/ui/(Bteam)atomize/schedule_table/ts/customerType';
import { boxStyle } from '@/styles/sizes';
import { Box } from '@mui/material';
import ContentBox from './ContentBox';
import CustomerContent from './CustomerContent';

const CustomerTimeBox = ({ timeSlot, customer }: CustomerTimeSlotProps) => {
  return (
    <Box sx={{ display: 'flex', gap: boxStyle.gap.small }}>
      <Box
        sx={{
          width: boxStyle.boxWidth.small,
          height: boxStyle.boxHeight.small,
          padding: boxStyle.padding.small,
        }}
      >
        <ContentBox variant="subtitle1" mainText={timeSlot} />
      </Box>
      <CustomerContent customer={customer ? [customer] : undefined} />
    </Box>
  );
};

export default CustomerTimeBox;
