import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { LabelProps } from '@/util/type/atom';
import { ListItemText } from '@mui/material';

const Label = ({ text = 'Default Label', fontSize = 'medium', color = 'primary' }: LabelProps) => {
  return (
    <ListItemText
      primary={text}
      primaryTypographyProps={{ fontSize: sizes.fontSize[fontSize] }}
      sx={{ color: colors.text[color] }}
    />
  );
};

export default Label;
