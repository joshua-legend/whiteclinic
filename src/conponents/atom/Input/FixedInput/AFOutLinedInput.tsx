'use client';
import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, InputLabel, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type heightSize = 'small' | 'medium';

type AFOutLinedInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputHeightSize?: heightSize;
};

const AFOutLinedInput = ({
  type,
  placeholder,
  isInvisible,
  width,
  sx,
  isMultiline,
  inputHeightSize = 'small',
}: AFOutLinedInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl
      sx={{ m: 1, width: `${width}px`, ...sx }}
      variant="outlined"
      size={inputHeightSize}
    >
      <OutlinedInput
        sx={{ height: '20px' }}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        multiline={isMultiline}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle modify text" edge="end" onClick={handleChange}>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default AFOutLinedInput;
