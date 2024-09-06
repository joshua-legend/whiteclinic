import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import { Box, SelectChangeEvent } from '@mui/material';
import { state, WeekDays } from '@/constants/definition';
import CDatePicker from '@/components/atom/CDatePicker';
import { useState } from 'react';

type rightModel = {
  regularDay: string;
  irregularDay: string;
  regularCheckBox: boolean;
  irregularCheckBox: boolean;
};

export const RightInfoComponent = () => {
  const [rightModel, setRightModel] = useState<rightModel>({
    regularDay: '',
    irregularDay: '',
    regularCheckBox: false,
    irregularCheckBox: false,
  });

  //드롭다운,체크박스 상태관리 함수
  const rightModelHandler = (key: keyof rightModel, value: string | boolean) => {
    setRightModel((prev) => ({ ...prev, [key]: value }));
    console.log(rightModel);
  };

  //체크박스 상태관리 함수
  const [checkedState, toggleChckedSate] = useState(false);

  const rightinfo = [
    [
      '정기휴무',
      <CDropDown
        key="weekdays"
        contentList={WeekDays}
        contentName="요일 선택"
        handleChange={(e) => rightModelHandler('regularDay', e.target.value)}
        selectedValue={rightModel.regularDay}
      />,
      <CCheckbox<state>
        key="dayoffCheckbox"
        label="휴무추가"
        isChecked={rightModel.regularCheckBox}
        handleChange={(e) => {
          rightModelHandler('regularCheckBox', e.target.checked);
          toggleChckedSate((state) => !state);
        }}
      />,
    ],

    [
      '비정기휴무',
      <CDatePicker
        key="calenderComponent"
        handleChange={(e) =>
          rightModelHandler('irregularDay', String(e?.format('YYYY년 MM월 DD일')))
        }
      />,
      <CCheckbox<state>
        key="vacationCheckbox"
        label="휴무추가"
        isChecked={rightModel.irregularCheckBox}
        handleChange={(e) => {
          rightModelHandler('irregularCheckBox', e.target.checked);
          toggleChckedSate((state) => !state);
        }}
      />,
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
