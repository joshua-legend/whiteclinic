import { Checkbox, FormControlLabel } from '@mui/material';
import { allType, skill } from './KMS_CCheckboxData';

type KMS_CCheckboxboxProps = {
  label: allType;
  isChecked?: boolean;
  handleClick?: () => void;
};

const KMS_CCheckbox = ({ label, handleClick }: KMS_CCheckboxboxProps) => {
  return (
    <FormControlLabel //
      control={
        <Checkbox
          // checked={isChecked}
          onChange={handleClick} //
        />
      } //
      label={label} //
    />
  );
};

export default KMS_CCheckbox;
