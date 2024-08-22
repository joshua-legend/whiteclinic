import { dropdownStyle, sizes } from '@/styles/sizes';
import { FormControl, FormControlPropsSizeOverrides } from '@mui/material';

type DropFormControlProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  margin?: keyof typeof dropdownStyle.margin;
  minWidth?: keyof typeof dropdownStyle.minWidth;
};
const DropFormControl = ({
  children,
  size = 'small',
  margin = 'min',
  minWidth = 'medium',
}: DropFormControlProps) => {
  return (
    <FormControl sx={{ m: { margin }, minWidth }} size={size}>
      {children}
    </FormControl>
  );
};

export default DropFormControl;
