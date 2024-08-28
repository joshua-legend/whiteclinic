import { checkboxProps } from '@/constants/definition';
import { Checkbox, FormControlLabel } from '@mui/material';

const CCheckbox = ({ label = '덕트', handleChange, isChecked = true }: checkboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={isChecked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default CCheckbox;
