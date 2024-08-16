import React from 'react';
import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';

export type CheckBoxProps = {
  label: string;
  checked: boolean;
  handleCheck: (checked: boolean) => void;
};

export const CustomCheckbox = ({ label, checked, handleCheck }: CheckBoxProps) => {
  return (
    <FormControlLabel
      control={<MUICheckbox checked={checked} onChange={(e) => handleCheck(e.target.checked)} />}
      label={label}
    />
  );
};
