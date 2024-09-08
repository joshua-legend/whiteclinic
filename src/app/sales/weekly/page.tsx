'use client';

import { useState } from 'react';
import '../../../styles/global.css';
import { Box } from '@mui/material';
import { formatDate } from '@/util/dateUtil';
import DateSelectBar from '@/conponents/organism/Schedule/DateSelectBar';
import ScheduleInfo from '@/conponents/organism/Schedule/ScheduleInfo';

// 일정 등록
const registeredDates = [new Date('2024-09-01')];
const engineers = ['김의덕', '이몽룡', '강철'];

const isRegisteredDate = (date: Date | null) => {
  if (!date) return false;
  return registeredDates.some(
    (registeredDate) => date.toDateString() === registeredDate.toDateString()
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const innerBoxStyle = {
  width: 'calc(100vw - 240px)',
  height: 'calc(100vh - 73px)',
  display: 'flex',
  bgcolor: '#f2f2f2',
};

const scheduleInfoContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 73px)',
  overflowY: 'auto',
};

const dateDisplayStyle = {
  width: 'calc(100vw - 417px)',
  minHeight: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: '#F2F2F2',
  color: '#3F4D67',
};

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const displayDate = selectedDate ? formatDate(selectedDate) : '';
  const displayDayOfWeek = selectedDate
    ? selectedDate.toLocaleDateString('ko-KR', { weekday: 'long' })
    : '';
  return (
    <Box sx={containerStyle}>
      <Box sx={containerStyle}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={innerBoxStyle}>
              <DateSelectBar onSelectDate={setSelectedDate} />
              <Box sx={scheduleInfoContainerStyle}>
                <Box sx={dateDisplayStyle}>
                  {displayDate} {displayDayOfWeek}
                </Box>
                {isRegisteredDate(selectedDate) &&
                  engineers.map((engineer, index) => (
                    <ScheduleInfo key={index} selectedDate={selectedDate} engineerName={engineer} />
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
