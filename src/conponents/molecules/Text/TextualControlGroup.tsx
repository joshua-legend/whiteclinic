import React from 'react';

import { Box } from '@mui/material';
import RCheckbox, { CheckboxProps } from '@/conponents/atom/CheckBox/RCheckbox';
import RIcon, { IconProps } from '@/conponents/atom/Icon/RIcon';
import AText, { TextProps } from '@/conponents/atom/Text/AText';

type ComponentType = 'RIcon' | 'RCheckbox';
type PrevProps = CheckboxProps | IconProps;

type TextualControlGroupProps = {
  component?: ComponentType;
  preveprops?: PrevProps;
  textprops?: TextProps;
};

// 컴포넌트 매핑
const componentsMap = {
  RIcon,
  RCheckbox,
};

const TextualControlGroup = ({ component, preveprops, textprops }: TextualControlGroupProps) => {
  // 선택된 컴포넌트 가져오기
  const Component = component ? componentsMap[component] : null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems:'center', gap: '10px' }}>
      {Component && <Component {...preveprops} />}
      <AText {...textprops} />
    </Box>
  );
};

export default TextualControlGroup;


