import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ko';
import { datePickerProps, minDate } from '@/constants/definition';

const CDatePicker = ({ label = '일정 선택', value, onChange }: datePickerProps) => {
  dayjs.locale('ko');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          views={['year', 'month', 'day']}
          slotProps={{
            textField: {
              placeholder: '연 / 월 / 일',
            },
          }}
          label={label}
          format="YYYY년 MM월 DD일"
          defaultValue={value}
          onChange={onChange}
          minDate={minDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CDatePicker;
