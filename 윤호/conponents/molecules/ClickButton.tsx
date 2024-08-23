import { Box } from "@mui/material";
import BasicButton from "../atom/BasicButton";
import * as React from "react";
import { ClickButtonProps } from "@/app/util/clickButtonType";

const ClickButton = ({ basicbuttonprops, onClick }: ClickButtonProps) => {
  return (
    <Box onClick={onClick}>
      <BasicButton {...basicbuttonprops} />
    </Box>
  );
};

export default ClickButton;
