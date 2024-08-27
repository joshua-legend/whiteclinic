import { colors, FormControl, IconButton, TextField } from '@mui/material';
import { infoInputProps } from './LJH_CInfoInput';
import { FaPencil } from 'react-icons/fa6';

type modifyInputProps = {
  isReadOnly?: boolean;
  isModifiable?: boolean;
  inputText?: string;
  modify?: () => void;
};

const ModifyInput = (
  { inputType, infoLabelType = '고객 성함' }: infoInputProps,
  {
    isReadOnly = true,
    isModifiable = true,
    inputText = '홍길동',
    modify = () => console.log('modify active'),
  }: modifyInputProps
) => {
  return (
    <FormControl>
      <TextField
        label={infoLabelType}
        type={inputType}
        defaultValue={inputText}
        InputProps={{
          readOnly: isReadOnly,
          endAdornment: isModifiable ? (
            <IconButton onClick={modify}>
              <FaPencil color="silver" size={18} />
            </IconButton>
          ) : null,
        }}
      />
    </FormControl>
  );
};

export default ModifyInput;
