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

type AFFilledInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
};

const AFFilledInput = ({
  type,
  placeholder,
  isInvisible,
  width,
  sx,
  isMultiline,
}: AFFilledInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ m: 1, width: `${width}px`, ...sx }} variant="filled">
      <FilledInput
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        multiline={isMultiline}
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

export default AFFilledInput;
