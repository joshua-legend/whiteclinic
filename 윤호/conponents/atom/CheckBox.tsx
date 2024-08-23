import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { CheckBoxProps } from "@/app/util/checkBoxType";

const CheckBox = ({ sx, color = "primary" }: CheckBoxProps) => {
  return <Checkbox color={color} sx={{ ...sx }} />;
};

export default CheckBox;
