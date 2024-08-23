import { ListItem } from "@mui/material";
import { TitleMenuBoxProps } from "@/app/util/titleMenuBoxType";
import Icon from "../atom/Icon";
import Label from "../atom/Label";

const TitleMenuBox = ({ iconprops, labelprops }: TitleMenuBoxProps) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon
        {...iconprops}
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "40px",
          height: "20px",
        }}
      />
      <Label {...labelprops} fontSize="small" />
    </ListItem>
  );
};

export default TitleMenuBox;
