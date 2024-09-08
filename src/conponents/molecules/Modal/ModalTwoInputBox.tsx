import * as React from 'react';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import { ModalFormContentsStyle, ModalFormStyle } from '@/styles/mui';
import { Box } from '@mui/material';

export type ModalTwoInputBoxProps = {
  title: string;
  handleClose: () => void;
};

const ModalTwoInputBox = ({ title = '주제를 정해주세요', handleClose }: ModalTwoInputBoxProps) => {
  return (
    <Box
      sx={{
        ...ModalFormStyle,
      }}
    >
      <Box sx={{ ...ModalFormContentsStyle }}>
        <Box>{title}</Box>
        <Box display={'flex'} width={'100%'}>
          <ACustomButton
            variant="contained"
            text="취소"
            sx={{ width: '100%', borderRadius: 0 }}
            onClick={handleClose}
          />
          <ACustomButton
            variant="contained"
            color="primary"
            text="등록"
            sx={{ width: '100%', borderRadius: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default ModalTwoInputBox;
