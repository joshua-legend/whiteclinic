import CButton from '@/components/atom/CButton';
import { Box, ButtonGroup } from '@mui/material';
import { ButtonTwoModalProps } from './ButtonTwo';


export const ButtonModal = ({
  leftButton,
  rightButton,
  leftColor,
  rightColor,
  leftBgColor,
  rightBgBolor,
  onLeftButton,
  onRightButton,
  modalText,
}: ButtonTwoModalProps) => {
  return (
    <Box>
      <p>{modalText}</p>
      <ButtonGroup>
        <CButton
          content={leftButton} //
          color={leftColor}
          bgColor={leftBgColor}
          handleClick={onLeftButton}
        />
        <CButton
          content={rightButton} //
          color={rightColor}
          bgColor={rightBgBolor}
          handleClick={onRightButton}
        />
      </ButtonGroup>
    </Box>
  );
};
