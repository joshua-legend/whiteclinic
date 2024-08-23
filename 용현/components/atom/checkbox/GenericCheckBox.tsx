import { Checkbox, FormControlLabel } from '@mui/material';

type GenericCheckBoxProps = {
  label: string;
};

const GenericCheckBox = ({ label }: GenericCheckBoxProps) => {
  return <FormControlLabel control={<Checkbox />} label={label} />;
};

export default GenericCheckBox;
