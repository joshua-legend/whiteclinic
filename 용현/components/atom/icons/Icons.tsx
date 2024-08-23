import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { ListItemIcon, SvgIconTypeMap } from '@mui/material';
import { ReactElement } from 'react';

export type IconsProps = {
  icon: ReactElement;
  color?: keyof typeof colors.text;
  fontSize?: keyof typeof sizes.fontSize;
};

const Icons = ({ icon, color = 'drawer', fontSize = 'md' }: IconsProps) => {
  return (
    <ListItemIcon sx={{ color: colors.text[color], fontSize: sizes.fontSize[fontSize] }}>
      {icon}
    </ListItemIcon>
  );
};

export default Icons;
