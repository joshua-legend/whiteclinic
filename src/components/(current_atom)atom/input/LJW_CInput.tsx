import { inputStyle, sizes } from '@/styles/sizes';
import { TextField } from '@mui/material';

type variants = 'outlined' | 'standard' | 'filled';
type fieldType = 'text' | 'number';
type fontSizes = keyof typeof sizes.fontSize;

type LJW_CInputProps = {
  label?: string;
  variant?: variants;
  disable?: boolean;
  type?: fieldType;
  fontSize?: fontSizes;
  helperText?: string;
};

const LJW_CInput = ({
  label = 'default label',
  variant = 'standard',
  disable = false,
  type,
  fontSize = 'medium',
  helperText,
}: LJW_CInputProps) => {
  return (
    <TextField
      sx={{ ...inputStyle.inputSize }}
      fullWidth
      label={label}
      variant={variant}
      type={type}
      disabled={disable}
      helperText={helperText}
      InputProps={{
        sx: { fontSize: sizes.fontSize[fontSize] },
      }}
    />
  );
};

export default LJW_CInput;
