import { Checkbox } from '@mui/material';

export type CheckboxProps = {
  isCheck?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RCheckbox = ({ isCheck, onChange }: CheckboxProps) => {
  return <Checkbox checked={isCheck} onChange={onChange} />;
};

export default RCheckbox;
