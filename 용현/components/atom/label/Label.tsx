import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { ListItemText } from '@mui/material';

export type LabelProps = {
  text?: string;
  color?: keyof typeof colors.text;
  fontSize?: keyof typeof sizes.fontSize;
};

const Label = ({ text, color = 'drawer', fontSize = 'md' }: LabelProps) => {
  return (
    <div className="w-24 text-center">
      <ListItemText
        primary={text}
        primaryTypographyProps={{
          style: { color: colors.text[color], fontSize: sizes.fontSize[fontSize] },
        }}
      />
    </div>
  );
};
export default Label;
