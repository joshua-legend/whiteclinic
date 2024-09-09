import AVOutlinedInput from '@/conponents/atom/Input/VariableInput/AVOutlinedInput';
import { AVariableModifyInputBoxProp } from '../Input/AVariableModifyInputBox';
import AVFilledInput from '@/conponents/atom/Input/VariableInput/AVFilledInput';
import AVStandardInput from '@/conponents/atom/Input/VariableInput/AVStandardInput';

export type AVariableNumericInputBoxProps = {
  inputboxprops?: Omit<AVariableModifyInputBoxProp<string>, 'type'>;
  type?: 'number';
  minNumber?: number;
  maxNumber?: number;
};

const AVariableNumericInputBox = ({
  inputboxprops,
  type = 'number',
  minNumber,
  maxNumber,
}: AVariableNumericInputBoxProps) => {
    
  const inputVariant = inputboxprops?.inputVariant || 'outlined';

  const NumbericInputBoxProps = {
    ...inputboxprops,
    type,
    inputProps: {
      min: minNumber,
      max: maxNumber,
    },
  };

  switch (inputVariant) {
    case 'filled':
      return <AVFilledInput {...NumbericInputBoxProps} />;
    case 'standard':
      return <AVStandardInput {...NumbericInputBoxProps} />;
    default:
      return <AVOutlinedInput {...NumbericInputBoxProps} />;
  }
};

export default AVariableNumericInputBox;
