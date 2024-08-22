// 라벨을 위한 타입 정의
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography, Box } from '@mui/material';

// 라벨
type MyLabelProps = {
  text: string;
};

// 박스
type MyBoxProps = {
  checked: boolean;
};

//라벨+박스
type MyCheckBoxProps = {
  label: MyLabelProps;
  isChecked: MyBoxProps;
};

export const MyCheckBox = ({ label, isChecked }: MyCheckBoxProps) => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Checkbox checked={isChecked.checked} />
      <Typography>{label.text}</Typography>
    </Box>
  );
};
