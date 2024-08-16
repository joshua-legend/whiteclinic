'use client';

import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export default function KoreanDateCalendar() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
    if (newDate) {
      console.log('선택한 날짜:', newDate.format('YYYY년 MM월 DD일 dddd'));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange}
        sx={{
          width: '910px', // 7 * 130px (날짜 셀 너비)
          height: '650px', // 대략적인 높이, 필요에 따라 조정
          '& .MuiPickersCalendarHeader-root': {
            padding: '10px 0',
            '& .MuiPickersCalendarHeader-label': {
              fontSize: '20px',
            },
            '& .MuiPickersArrowSwitcher-button': {
              width: '40px', //화살표
              height: '40px', //화살표
            },
          },
          '& .MuiDayCalendar-header': {
            '& .MuiTypography-root': {
              fontSize: '16px',
              width: '130px', // 요일 헤더 너비
            },
          },
          '& .MuiPickersDay-root': {
            fontSize: '18px',
            width: '130px',
            height: '80px', // 날짜 셀 높이 조정
            margin: '1px',
          },
          '& .MuiPickersDay-today': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          '& .MuiPickersDay-selected': {
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover, &:focus': {
              backgroundColor: 'primary.dark',
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
