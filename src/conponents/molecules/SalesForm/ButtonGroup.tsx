'use client';

import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import { ACustomButtonProps } from '@/util/ButtonType';
import { Box } from '@mui/material';

export type ButtonGroupProps = {
  abuttonprops: ACustomButtonProps[];
};

const ButtonGroup = ({ abuttonprops }: ButtonGroupProps) => {
  return (
    <Box
      sx={{
        width: '574px',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {abuttonprops.map((buttonprops, index) => (
        <ACustomButton sx={{ width: '100%' }} key={index} {...buttonprops} />
      ))}
    </Box>
  );
};

export default ButtonGroup;
