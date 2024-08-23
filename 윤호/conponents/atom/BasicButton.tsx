import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { BasicButtonProps } from "@/app/util/basicButtonType";

const BasicButton = ({ text, sx }: BasicButtonProps) => {
  const buttonName = Array.from(text);
  return (
    <Button variant="contained" sx={{ width: "160px", borderRadius: 0, ...sx }}>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {buttonName.map((v) => (
          <span>{v}</span>
        ))}
      </Box>
    </Button>
  );
};

export default BasicButton;
