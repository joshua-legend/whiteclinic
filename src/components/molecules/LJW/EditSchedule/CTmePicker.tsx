import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Dayjs } from 'dayjs';

type CTimePickerProps = {
  label: string;
  handleChange: (time: Dayjs | null) => void;
};
const CTimePicker = ({ label = '시간 선택', handleChange }: CTimePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label={label} onChange={handleChange} format="HH:mm" />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CTimePicker;
