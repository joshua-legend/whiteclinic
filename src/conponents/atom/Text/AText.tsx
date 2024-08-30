import { sizes } from '@/styles/sizes';
import { TextType } from '@/constants/textType';
import { Typography } from '@mui/material';

export type TextProps = {
  text?: TextType;
  size?: keyof typeof sizes.fontSize;
};

const AText = ({ text, size = 'medium' }: TextProps) => {
  return <Typography sx={{ fontSize: sizes.fontSize[size] }}>{text}</Typography>;
};

export default AText;
