// 라벨을 위한 타입 정의
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography, Box } from '@mui/material';
import { MyLabelProps } from './MyLabel';
import { MyBoxProps } from './MyBox';

import { CheckboxDataProps } from './MyCheckBoxData';
import { AllLabels } from './MyCheckBoxData2';

//라벨+박스
export type MyCheckBoxProps = {
  label: AllLabels;
  isChecked: MyBoxProps;
};

export const MyCheckBox = ({ label, isChecked }: MyCheckBoxProps) => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Checkbox checked={isChecked.isChecked} />
      <Typography>{label}</Typography>
    </Box>
  );
};
