import { TextField } from '@mui/material';

type LJW_CInputProps = {
  label?: string;
  variant?: 'outlined' | 'standard' | 'filled';
  disable?: boolean;
  type?: 'text' | 'number';
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
};

const LJW_CInput = ({ label, variant, disable, type }: LJW_CInputProps) => {
  return <TextField></TextField>;
};

export default LJW_CInput;
