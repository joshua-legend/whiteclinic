import { Checkbox, FormControlLabel } from '@mui/material';
import { allType } from './KMS_CCheckboxData';

type KMS_CCheckboxboxProps = {
  label: allType;
  isChecked?: boolean;
  handleChange?: () => void;
};

const KMS_CCheckbox = ({
  label = '덕트',
  handleChange,
  isChecked = true,
}: KMS_CCheckboxboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={isChecked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default KMS_CCheckbox;
