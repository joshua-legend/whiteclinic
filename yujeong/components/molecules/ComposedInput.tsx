import { Box } from '@mui/material';
import Icon from '../atom/Icon';
import TextInput from '../atom/TextInput';
import { ComposedInputProps } from '@/util/type/molecules';
import { handleInputChange } from '@/util/event/handler';


const ComposedInput = ({ iconprops, textinputprops }: ComposedInputProps) => {
  return (
    <Box display="flex" alignItems="center">
      <TextInput {...textinputprops} onChange={handleInputChange} />
      <Icon {...iconprops} />
    </Box>
  );
};

export default ComposedInput;
