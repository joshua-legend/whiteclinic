import { sizes } from "@/styles/sizes";
import { createHandleInputChange } from "@/util/event/handler";
import { TextInputProps } from "@/util/type/atom";
import { TextField } from "@mui/material";


const TextInput = ({ size='default', onChange }: TextInputProps) => {
    return (
        <TextField
        id="standard-textarea"
        label=""
        placeholder="입력"
        multiline
        variant="standard"
        onChange={createHandleInputChange(onChange)}
        InputProps={{
          sx: {
            '&:before': {
              borderBottomColor: 'black',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'black',
            },
            '&:after': {
              borderBottomColor: 'black',
            },
          },
        }}
        sx={{
          width: sizes.inputWidth[size],
        }}
      />
    );
}

export default TextInput;