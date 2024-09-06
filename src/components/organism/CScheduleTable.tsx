import CDatePicker from '@/components/atom/CDatePicker';
import CScheduleDateBox from '../molecules/LJW/CScheduleDateBox';
import { useState } from 'react';
import CScheduleTimeLineList from '../molecules/LJW/CScheduleTimeLineList';
import { Dayjs } from 'dayjs';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/constants/theme';
import { CustomerInfo, engineerInfo, TODAY } from '@/constants/definition';
import { StyledScheduleTable } from '@/styles/customize';

const CScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(TODAY);
  const [engineers, setEngineers] = useState<engineerInfo[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSelect = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTable }}>
        <CDatePicker value={selectedDate} handleChange={handleSelect} />
        <div>
          <CScheduleDateBox dateInfo={selectedDate} />
          {loading ? (
            <div>loading...</div>
          ) : engineers.length > 0 ? (
            <CScheduleTimeLineList
              selectDate={selectedDate}
              engineers={engineers}
              orderInfo={customerInfo}
            />
          ) : (
            <Typography variant="h4" component="div">
              데이터 없음
            </Typography>
          )}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTable;
