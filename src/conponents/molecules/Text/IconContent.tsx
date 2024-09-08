import React from 'react';
import { Box } from '@mui/material';
import RIcon, { IconProps } from '@/conponents/atom/Icon/RIcon';
import AText, { TextProps } from '@/conponents/atom/Text/AText';

type IconContentProps = {
  iconprops?: IconProps;
  textprops?: TextProps;
};

const IconContent = ({ iconprops, textprops }: IconContentProps) => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems:'center', gap: '10px' }}>
      <RIcon {...iconprops} />
      <AText {...textprops} />
    </Box>
  );
};

export default IconContent;


