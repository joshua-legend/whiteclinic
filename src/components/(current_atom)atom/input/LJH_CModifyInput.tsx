import { FormControl, TextField } from '@mui/material';
import { infoInputProps } from './LJH_CInfoInput';

type modifyInputProps = {
  isReadOnly?: boolean;
  inputText?: string;
};

const ModifyInput = (
  { inputType, infoLabelType }: infoInputProps,
  { isReadOnly, inputText }: modifyInputProps
) => {
  return (
    <FormControl>
      <TextField
        label={infoLabelType}
        type={inputType}
        defaultValue={inputText}
        InputProps={{ readOnly: isReadOnly }}
      />
    </FormControl>
  );
};

export default ModifyInput;
