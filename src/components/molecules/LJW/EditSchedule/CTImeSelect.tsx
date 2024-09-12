import { Box } from '@mui/material';
import CTimePicker from './CTmePicker';
import { Dayjs } from 'dayjs';

type CtimeSelectProps = {
  handleStartTime: (time: Dayjs | null) => void;
  handleEndTime: (time: Dayjs | null) => void;
};

const CTimeSelect = ({ handleStartTime, handleEndTime }: CtimeSelectProps) => {
  return (
    <Box>
      <CTimePicker label="시작 시간" handleChange={handleStartTime} />
      <CTimePicker label="종료 시간" handleChange={handleEndTime} />
    </Box>
  );
};
export default CTimeSelect;
