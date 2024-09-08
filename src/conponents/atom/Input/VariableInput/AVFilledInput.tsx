"use client";
import * as React from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  InputLabel,
  IconButton,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

type heightSize = "small" | "medium";

type AVFilledInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputHeightSize?: heightSize;
};

const AVFilledInput = ({
  type,
  placeholder,
  isInvisible = true,
  width = 4,
  sx,
  isMultiline = false,
  inputHeightSize = "small",
}: AVFilledInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;

      inputElement.style.width = "80px";

      const scrollWidth = inputElement.scrollWidth;
      const padding = 1;
      const newWidth = Math.max(width * 8, scrollWidth + padding);

      inputElement.style.width = `${newWidth}px`;
    }
  }, [inputValue, width]);

  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: `${width}ch`, ...sx }}
      variant="filled"
      size={inputHeightSize}
    >
      <FilledInput
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        multiline={isMultiline}
        placeholder={placeholder}
        disabled={isDisabled}
        inputRef={inputRef}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle modify text"
              edge="end"
              onClick={handleChange}
            >
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default AVFilledInput;
