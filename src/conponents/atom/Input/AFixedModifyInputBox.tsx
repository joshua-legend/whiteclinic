'use client';
import * as React from 'react';
import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type InputTextType<T extends string> = {
  text?: T;
  password?: T;
};

type InputVariantType<T extends string> = {
  outlined?: T;
  standard?: T;
  filled?: T;
};

type AFixedModifyInputBoxProp<T extends string> = {
  type?: keyof InputTextType<T>;
  placeholder?: T;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputVariant?: keyof InputVariantType<T>;
};

const AFixedModifyInputBox = <T extends string>({
  type = 'text',
  placeholder,
  isInvisible = true,
  width = 160,
  sx,
  isMultiline = false,
  inputVariant = 'outlined',
}: AFixedModifyInputBoxProp<T>) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };
  const inputProps = {
    type,
    endAdornment: (
      <InputAdornment position="end">
        <IconButton aria-label="toggle modify text" edge="end" onClick={handleChange}>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      </InputAdornment>
    ),
    multiline: isMultiline,
    placeholder,
    disabled: isDisabled,
  };
  return (
    <FormControl sx={{ m: 1, width: `${width}px`, ...sx }} variant={inputVariant}>
      {(inputVariant === 'outlined' || inputVariant === 'filled') && (
        <InputLabel>{placeholder}</InputLabel>
      )}
      {inputVariant === 'outlined' && <OutlinedInput {...inputProps} />}
      {inputVariant === 'filled' && <FilledInput {...inputProps} />}
      {inputVariant === 'standard' && <Input {...inputProps} />}
    </FormControl>
  );
};

export default AFixedModifyInputBox;
