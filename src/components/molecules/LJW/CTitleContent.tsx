import { Typography, TypographyProps } from '@mui/material';

//엔지니어 이름 컴포넌트 - atom으로 이동 고려
export type CTitleContentProps = {
  content: string;
  variant?: TypographyProps['variant'];
  subContent?: string;
};
const CTitleContent = ({ content, variant = 'h5', subContent }: CTitleContentProps) => {
  return (
    <Typography variant={variant}>
      {content}
      {subContent}
    </Typography>
  );
};

export default CTitleContent;
