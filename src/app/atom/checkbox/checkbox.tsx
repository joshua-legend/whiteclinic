import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

import { Engineer, Input, Order, Revenue, Salary } from './checkbox';

type CheckBoxProps = {
  label: Order | Revenue | Salary | Engineer | Input | '';
  labelSize?: 'small' | 'medium' | 'large' | 'xlarge'; // 라벨의 크기 지정
  checkBoxSize?: 'small' | 'medium' | 'large' | 'xlarge'; // 체크박스 크기 지정
};

export const CheckBox = ({
  label = '',
  labelSize = 'medium',
  checkBoxSize = 'xlarge',
}: CheckBoxProps) => {
  const fontSize = sizes.fontSize[labelSize];
  const boxSize = sizes.fontSize[checkBoxSize];

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={{ boxSize, '& .MuiSvgIcon-root': { fontSize: sizes.fontSize[checkBoxSize] } }}
          />
        }
        label={<Typography sx={{ fontSize }}>{label}</Typography>}
      />
    </FormGroup>
  );
};
