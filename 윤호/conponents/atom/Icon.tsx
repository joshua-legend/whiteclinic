import { IconProps } from "@/app/util/iconType";
import { ListItemIcon } from "@mui/material";

const Icon = ({ icon, color, sx }: IconProps) => {
  return (
    <ListItemIcon
      sx={{
        color,
        ...sx,
      }}
    >
      {icon}
    </ListItemIcon>
  );
};

export default Icon;
