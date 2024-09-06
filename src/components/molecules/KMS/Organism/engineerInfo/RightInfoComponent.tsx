import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import { Box, SelectChangeEvent } from '@mui/material';
import { state, WeekDays } from '@/constants/definition';
import CDatePicker from '@/components/atom/CDatePicker';
import { useState } from 'react';

export const RightInfoComponent = () => {
  const [regularHoliday, setRegularHoliday] = useState<string>();
  const [irregularHoliday, setIrregularHoliday] = useState();

  const handleRegularHoliday = (event:SelectChangeEvent<string>) => {
    setRegularHoliday(event.target.value);
    console.log(regularHoliday);
  };

  const rightinfo = [
    [
      '정기휴무',
      <CDropDown
        key="weekdays"
        contentList={WeekDays}
        contentName="요일 선택"
        handleChange={handleRegularHoliday}
        selectedValue={regularHoliday}
      />,
      <CCheckbox<state> key="dayoffCheckbox" label="휴무추가" isChecked={false} />,
    ],

    [
      '비정기휴무',
      <CDatePicker key="calenderComponent" />,
      <CCheckbox<state> key="vacationCheckbox" label="휴무추가" isChecked={false} />,
    ],
  ];

  return (
    <Box
      sx={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
      }}
    >
      {rightinfo.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {item}
        </Box>
      ))}
    </Box>
  );
};
