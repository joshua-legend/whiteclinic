import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Dayjs } from 'dayjs';

const Calendar = ({ onDateSelect }: { onDateSelect: (date: string) => void }) => {
  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formatDate = date.format('YYYY-MM-DD');

      onDateSelect(formatDate);
    }
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleDateChange} />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
