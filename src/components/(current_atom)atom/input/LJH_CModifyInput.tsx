import { FormControl, IconButton, TextField } from '@mui/material';
import { infoInputProps } from './LJH_CInfoInput';
import { FaPencil } from 'react-icons/fa6';

type modifyInputProps = {
  isReadOnly?: boolean;
  inputText?: string;
  modify?: () => void;
};

const ModifyInput = (
  { inputType, infoLabelType = '고객 성함' }: infoInputProps,
  {
    isReadOnly = true,
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
          endAdornment: (
            <IconButton onClick={modify}>
              <FaPencil size={15}/>
            </IconButton>
          ),
        }}
      />
    </FormControl>
  );
};

export default ModifyInput;
