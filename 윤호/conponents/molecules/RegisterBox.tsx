import { Box } from "@mui/material";
import BasicButton from "../atom/BasicButton";

const RegisterBox = () => {
  const registerFormContext = "세척 품목을 등록하겠습니까?";
  const SecondaryButtonStyle = {
    width: "160px",
    bgcolor: "#F2F2F2",
    color: "black",
    "&:hover": {
      backgroundColor: "#b2bec3",
    },
    borderRadius: 0,
  };
  const RegisterBoxSize = {
    width: "330px",
    height: "100px",
    display: "flex",
    alignContent: "center",
  };

  const RegisterBoxContentsStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    bgcolor: "#F3F3F3",
    px: "5px",
  };

  return (
    <Box
      sx={{
        ...RegisterBoxSize,
      }}
    >
      <Box sx={{ ...RegisterBoxContentsStyle }}>
        <Box>{registerFormContext}</Box>
        <Box>
          <BasicButton text="아니오" sx={{ ...SecondaryButtonStyle }} />
          <BasicButton text="등록" />
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterBox;
