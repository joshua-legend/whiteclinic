'use client';

import MuiButtonGroup from '@mui/material/ButtonGroup';
import { ButtonGroupProps } from '@/util/type/molecules';
import Button from '../atom/Button';

const ButtonGroup = ({ buttonprops }: ButtonGroupProps) => {
  return (
    <MuiButtonGroup>
      {buttonprops.map((buttonprops, index) => (
        <Button key={index} {...buttonprops} />
      ))}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
