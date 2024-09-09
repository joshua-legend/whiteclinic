import { Typography, TypographyProps } from '@mui/material';

//제목 내용 컴포넌트
export type CTitleContentProps = {
  content: string | null;
  variant?: TypographyProps['variant'];
  subContent?: string;
};
const CTitleContent = ({ content, variant = 'h5', subContent }: CTitleContentProps) => {
  // Dayjs 객체인 경우, 문자열로 변환

  return (
    <Typography variant={variant}>
      {content} {subContent}
    </Typography>
  );
};

export default CTitleContent;
