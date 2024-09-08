'use client';
import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type heightSize = 'small' | 'medium';

export type AVOutlinedInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputHeightSize?: heightSize;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onValueChange?: (value: string) => void;
};

const AVOutlinedInput = ({
  type,
  placeholder,
  isInvisible = true,
  width = 4,
  sx,
  isMultiline = false,
  inputHeightSize = 'small',
  value,
  onChange,
  onValueChange,
}: AVOutlinedInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;
      inputElement.style.width = '80px';
      const scrollWidth = inputElement.scrollWidth;
      const padding = 1;
      const newWidth = Math.max(width * 8, scrollWidth + padding);
      inputElement.style.width = `${newWidth}px`;
    }
  }, [value, width]);

  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e
  ) => {
    if (onChange) {
      onChange(e);
    }
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <FormControl sx={{ m: 1, width: `${width}`, ...sx }} variant="outlined" size={inputHeightSize}>
      <OutlinedInput
        type={type}
        value={value}
        sx={{ minWidth: '120px' }}
        onChange={handleInputChange}
        multiline={isMultiline}
        placeholder={placeholder}
        disabled={isDisabled}
        inputRef={inputRef}
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

export default AVOutlinedInput;
