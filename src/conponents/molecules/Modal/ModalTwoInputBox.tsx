import { Box } from "@mui/material";
import {
  ModalFormContentsStyle,
  ModalFormStyle,
  PrimaryButtonStyle,
  SecondaryButtonStyle,
} from "@/app/styles/mui";
import CustomButton from "../atom/CustomButton";
import { ModalTwoInputBoxProps } from "@/app/util/ModalTwoInputType";

const ModalTwoInputBox = ({
  title = "주제를 정해주세요",
  primaryText = "등록",
  secondaryText = "아니오",
}: ModalTwoInputBoxProps) => {
  const buttonData = {
    cancle: {
      text: secondaryText,
      sx: SecondaryButtonStyle,
    },
    register: {
      text: primaryText,
      sx: PrimaryButtonStyle,
    },
  };
  return (
    <Box
      sx={{
        ...ModalFormStyle,
      }}
    >
      <Box sx={{ ...ModalFormContentsStyle }}>
        <Box>{title}</Box>
        <Box>
          {Object.entries(buttonData).map(([key, item]) => (
            <CustomButton
              key={key}
              text={item.text}
              variant="contained"
              sx={{ ...item.sx }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ModalTwoInputBox;
