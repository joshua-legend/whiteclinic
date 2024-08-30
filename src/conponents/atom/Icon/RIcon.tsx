import { colors } from "@/styles/colors";
import { Box } from "@mui/material";
import { ReactElement } from "react";

export type IconProps = {
  icon?: ReactElement;
  color?: keyof typeof colors.background;
};

const RIcon = ({ icon }: IconProps) => {
  return <Box>{icon}</Box>;
};

export default RIcon;
