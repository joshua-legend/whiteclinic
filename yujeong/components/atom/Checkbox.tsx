import { CheckboxProps } from '@/util/type/atom';
import MuiCheckbox from '@mui/material/Checkbox';

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return <MuiCheckbox checked={checked} onChange={onChange} />;
};

export default Checkbox;
