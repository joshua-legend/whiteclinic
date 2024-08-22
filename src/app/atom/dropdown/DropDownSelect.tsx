import { Select, SelectChangeEvent } from '@mui/material';

type DropDownSelectProps = {
  labelSelectId?: string;
  id?: string;
  selectValue?: string;
  label?: string | number;
  handleChange?: (event: SelectChangeEvent) => void;
  children: React.ReactNode;
};

const DropDownSelect = ({
  labelSelectId,
  id,
  selectValue,
  label,
  handleChange,
  children,
}: DropDownSelectProps) => {
  return (
    <Select
      labelId={labelSelectId}
      id={id}
      value={selectValue}
      label={label}
      onChange={handleChange}
    >
      {children}
    </Select>
  );
};

export default DropDownSelect;
