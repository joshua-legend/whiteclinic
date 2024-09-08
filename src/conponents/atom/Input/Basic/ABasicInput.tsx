import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

type InputVariantType = 'outlined' | 'standard' | 'filled';

type heightSize = 'small' | 'medium';

export type ABasicInputProps = {
  label: string;
  variant: InputVariantType;
  width?: string;
  heightSize?: heightSize;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ABasicInput = ({
  label,
  variant = 'standard',
  width = '120px',
  heightSize = 'small',
  onChange,
}: ABasicInputProps) => {
  return (
    <>
      <TextField
        label={label}
        maxRows={4}
        variant={variant}
        sx={{ width: width }}
        size={heightSize}
        onChange={onChange}
      />
    </>
  );
};
export default ABasicInput;
