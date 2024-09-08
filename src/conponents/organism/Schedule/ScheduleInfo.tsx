import { timeSlots } from '@/constants/timeSlots';
import { Box } from '@mui/material';
import DateInfo from '../../molecules/Schedule/DateInfo';

type ScheduleInfoProps = {
  selectedDate: Date | null;
  engineerName?: string;
};

const ScheduleInfo = ({ selectedDate, engineerName }: ScheduleInfoProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: 'calc(100vw - 417px)',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#3F4D67',
          color: 'white',
        }}
      >
        {engineerName} 기사
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', py: 1 }}>
        {timeSlots.map((slot, index) => (
          <DateInfo key={index} time={slot} timeslotschedule={'일정 입력'} />
        ))}
      </Box>
    </Box>
  );
};

export default ScheduleInfo;
