import { sizes } from "@/app/styles/sizes";
import { InputBoxProps } from "@/app/util/InputBoxType";
import TextField from "@mui/material/TextField";

const InputBox = ({
  text = "제목",
  size,
  sx,
  fontSize = "medium",
}: InputBoxProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={text}
        variant="outlined"
        size={size}
        sx={{ ...sx, fontSize: sizes.fontSize[fontSize] }}
      />
    </>
  );
};

export default InputBox;
