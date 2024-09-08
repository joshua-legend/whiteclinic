import { TimeSlot } from '@/constants/timeSlots';
import { Box } from '@mui/material';

type DateInfoProps = {
  time?: TimeSlot;
  timeslotschedule?: string;
};

const DateInfo = ({ time, timeslotschedule }: DateInfoProps) => (
  <Box sx={{ display: 'flex' }}>
    <Box
      sx={{
        width: '120px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {time}
    </Box>
    <Box sx={{ height: '30px', display: 'flex', alignItems: 'center' }}>{timeslotschedule}</Box>
  </Box>
);

export default DateInfo;
