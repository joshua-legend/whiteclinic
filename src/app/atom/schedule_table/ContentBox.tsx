import { Typography, TypographyVariant } from '@mui/material';

//textbox 출력
export type ContentBoxProps = {
  variant: TypographyVariant;
  component?: React.ElementType;
  mainText: string | number;
  subText?: string;
  color?: string;
  isWrap?: boolean;
};
const ContentBox = ({
  mainText,
  subText,
  variant,
  component = 'span',
  color = 'black',
  isWrap = false,
}: ContentBoxProps) => {
  return (
    <Typography variant={variant} noWrap={isWrap} component={component} sx={{ color }}>
      {mainText} {subText}
    </Typography>
  );
};

export default ContentBox;
