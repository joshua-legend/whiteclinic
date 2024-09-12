import CDatePicker from '@/components/atom/CDatePicker';
import CDateEngineer from '../molecules/LJW/EditSchedule/CDateEngineer';
import CShowList from '../molecules/LJW/EditSchedule/CShowList';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { engineerInfo, TODAY } from '@/constants/definition';
import { Box, ThemeProvider } from '@mui/material';
import CDateCustomer from '../molecules/LJW/EditSchedule/CDateCustomer';
import CScheduleDateBox from '../molecules/LJW/ShowSchedule/CScheduleDateBox';
import { theme } from '@/constants/theme';

import CTimePicker from '../molecules/LJW/EditSchedule/CTmePicker';
import CShowEngineerInfo from '../molecules/LJW/EditSchedule/CShowEngineerInfo';
import CTimeSubmit from '../molecules/LJW/EditSchedule/CTimeSubmit';

const CEditSchedule = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(TODAY);
  const [selectEng, setSelectEng] = useState<engineerInfo | null>(null);
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);

  const handleSelect = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleEngineer = (engineer: engineerInfo) => {
    setSelectEng(engineer);
  };

  const handleStartTime = (time: Dayjs | null) => {
    setStartTime(time);
  };

  const handleEndTime = (time: Dayjs | null) => {
    setEndTime(time);
  };

  const handleButtonClick = () => {
    alert('클릭됨');
  };
  const formattedDate = selectedDate ? selectedDate.format('YYYY-MM-DD') : '';
  const formattedDay = selectedDate ? selectedDate.locale('ko').format('ddd') : '';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '1200px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CDatePicker value={selectedDate} handleChange={handleSelect} />
        </Box>

        <Box sx={{ display: 'flex', gap: '5px' }}>
          <CShowList children={<CDateCustomer selectDate={formattedDate} />} />
          <CShowList
            children={
              <CDateEngineer
                selectDate={formattedDate}
                selectDay={formattedDay}
                onEngineerClick={handleEngineer}
              />
            }
          />
          <CShowList children={<CShowEngineerInfo engineer={selectEng} />} />
          <CShowList
            children={
              <CTimeSubmit
                timeprops={{ handleStart: handleStartTime, handleEnd: handleEndTime }}
                handleClick={handleButtonClick}
              />
            }
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CEditSchedule;
