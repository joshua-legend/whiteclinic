import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

type GenericTextFieldProps = {
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const GenericTextField = ({ label, onChange }: GenericTextFieldProps) => {
  return (
    <>
      <TextField label={label} multiline maxRows={4} variant="standard" onChange={onChange} />
    </>
  );
};
export default GenericTextField;
