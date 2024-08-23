import { sizes } from "@/app/styles/sizes";
import { LabelProps } from "@/app/util/labelType";
import { ListItemText } from "@mui/material";

const Label = ({
  text = "Label",
  color = "black",
  fontSize = "medium",
  sx,
}: LabelProps) => {
  return (
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        style: { fontSize: sizes.fontSize[fontSize] },
        sx: { color, ...sx },
      }}
    />
  );
};

export default Label;
