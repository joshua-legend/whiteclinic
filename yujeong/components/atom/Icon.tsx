import { colors } from '@/styles/colors';
import { IconProps } from '@/util/type/atom';
import { ListItemIcon } from '@mui/material';

const Icon = ({ icon, color = 'default' }: IconProps) => {
  return <ListItemIcon sx={{ color: colors.icon[color] }}>{icon}</ListItemIcon>;
};
export default Icon;
