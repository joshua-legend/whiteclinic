import { hideNumberInputArrows, InputPropses } from '@/constants/definition';
import { containerStyle } from '@/styles/sizes';

import { FormControl, TextField } from '@mui/material';

const InputComponent = ({
  inputID = undefined,
  placeholderProp,
  functionProp,
  labelProp,
  isReadOnly = false,
  isDisabled = false,
  isRequired = true,
  adornment,
  type = 'text',
  color,
  minValue,
  maxValue,
  helperText = ' ',
  variableValue,
  containerWidth = '250px',
}: InputPropses) => {
  return (
    <FormControl sx={{ ...containerStyle.boxSize, width: containerWidth }}>
      <TextField
        sx={{
          color,
          ...(type === 'number' && hideNumberInputArrows), // number 타입에만 적용
        }}
        placeholder={placeholderProp}
        InputProps={{
          inputProps: { min: minValue, max: maxValue },
          readOnly: isReadOnly,
          endAdornment: adornment,
          disabled: isDisabled,
          required: isRequired,
        }}
        id={inputID}
        label={labelProp}
        type={type}
        onChange={functionProp}
        helperText={helperText}
        defaultValue={variableValue}
      />
    </FormControl>
  );
};

export default InputComponent;
