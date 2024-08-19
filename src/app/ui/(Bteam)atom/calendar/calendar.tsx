'use client';

import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface KoreanDateCalendarProps {
  selectedDate: Dayjs;
  onDateChange: (newDate: Dayjs | null) => void;
}

export default function KoreanDateCalendar({
  selectedDate,
  onDateChange,
}: KoreanDateCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DateCalendar
        value={selectedDate}
        onChange={onDateChange}
        sx={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto',
          '& .MuiPickersCalendarHeader-root': {
            paddingLeft: '8px',
            paddingRight: '8px',
            marginBottom: '8px',
            '& .MuiPickersCalendarHeader-label': {
              fontSize: '24px', 
              fontWeight: 'bold',
            },
            '& .MuiPickersArrowSwitcher-button': {
              width: '32px',
              height: '32px',
            },
          },
          '& .MuiDayCalendar-header': {
            '& .MuiTypography-root': {
              fontSize: '16px',  
              fontWeight: 'bold',
              color: 'text.secondary',
              width: 'calc(100% / 7)',
              margin: 0,
            },
          },
          '& .MuiDayCalendar-monthContainer': {
            marginTop: '8px',
          },
          '& .MuiPickersDay-root': {
            fontSize: '17.6px', 
            margin: 0,
            height: '40px',
            width: 'calc(100% / 7)',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          },
          '& .MuiPickersDay-today': {
            borderColor: 'primary.main',
          },
          '& .MuiPickersDay-selected': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover, &:focus': {
              backgroundColor: 'primary.dark',
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}