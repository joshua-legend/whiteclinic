import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export type MyBoxProps = {
  isChecked: boolean;
};

const MyBox = ({ isChecked }: MyBoxProps) => {
  return <Checkbox checked={isChecked} />;
};

export default MyBox;
