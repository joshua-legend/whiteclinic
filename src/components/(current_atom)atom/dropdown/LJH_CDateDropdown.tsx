import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { koKR } from '@mui/x-date-pickers/locales';

type dateDropdownProps = {
  label: string;
  value: Dayjs | null;
  onChange: () => void;
};

const DateDropdown = ({ label = '일정 선택', value, onChange }: dateDropdownProps) => {
  return (
    <LocalizationProvider {...koKR} dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={label}
          name="startDate"
          format="YYYY년 MM월 DD일"
          defaultValue={value}
          onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateDropdown;
