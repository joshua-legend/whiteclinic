import { sizes } from '@/styles/sizes';
import { Button } from '@mui/material';

type ButtonContent = '취소' | '등록' | '등록중지' | '추가등록' | '아니오' | '급여사항확인';

type LJW_CButtonProps = {
  content: ButtonContent;
  fontSize?: keyof typeof sizes.fontSize;
  fontWeight?: keyof typeof sizes.fontWeight;
  color?: string;
  btnType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const LJW_CButton = ({
  content,
  fontSize = 'medium',
  fontWeight = 'bold',
  color,
  btnType = 'button',
  onClick,
}: LJW_CButtonProps) => {
  return (
    <Button
      sx={{ width: '200px', height: '50px', fontSize, color, fontWeight }}
      variant="contained"
      onClick={onClick}
      type={btnType}
    >
      {content}
    </Button>
  );
};
export default LJW_CButton;
