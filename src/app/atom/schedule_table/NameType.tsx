import { Typography, TypographyVariant } from '@mui/material';

type NameBoxProps = {
  variant: TypographyVariant;
  component?: React.ElementType;
  mainText: string;
  subText?: string;
  color?: string;
  isWrap?: boolean;
};
const NameBox = ({
  mainText,
  subText,
  variant,
  component = 'span',
  color = 'black',
  isWrap = false,
}: NameBoxProps) => {
  return (
    <Typography variant={variant} noWrap={isWrap} component={component} sx={{ color }}>
      {mainText} {subText}
    </Typography>
  );
};

export default NameBox;
