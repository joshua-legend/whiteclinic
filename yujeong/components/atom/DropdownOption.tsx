import { DropdownOptionProps } from '@/util/type/atom';
import { MenuItem } from '@mui/material';

const DropdownOption = ({ value, text }: DropdownOptionProps) => {
  return <MenuItem value={value}>{text}</MenuItem>;
};

export default DropdownOption;
