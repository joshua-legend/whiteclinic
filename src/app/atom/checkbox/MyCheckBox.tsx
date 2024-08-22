import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

import { total } from './checkbox';
import { sizes } from '../../../styles/sizes';
import { Engineer, Input, Order, Revenue, Salary } from './checkbox';

type CheckBoxProps = {
  label: total | '';
  labelSize?: keyof typeof sizes.fontSize; // 라벨의 크기 지정
  checkBoxSize?: keyof typeof sizes.fontSize; // 체크박스 크기 지정
};

const MyCheckBox = ({
  label = '',
  labelSize = 'medium',
  checkBoxSize = 'xlarge',
}: CheckBoxProps) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: sizes.fontSize[checkBoxSize] } }} />
        }
        label={<Typography sx={{ labelSize }}>{label}</Typography>}
      />
    </FormGroup>
  );
};

export default MyCheckBox;
