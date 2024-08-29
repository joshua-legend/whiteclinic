import { CButtonProps } from '@/constants/definition';
import { Button } from '@mui/material';

/**
 * @param content 버튼 텍스트
 * @param fontSize 텍스트 사이즈 small medium large xlarge 중 택 1
 * @param fontWeight 텍스트 두게 normal bold 중 택 1
 * @param color CSS 속성 문자열로 직접 지정
 * @param type 버튼타입 3가지 button reset submit 중 택 1
 * @returns MUI 버튼 컴포넌트 반환 , 추후 스타일 규격화하여 적용 예정
 */
const CButton = ({
  content,
  fontSize = 'medium',
  fontWeight = 'bold',
  color,
  type = 'button',
  onClick,
}: CButtonProps) => {
  return (
    <Button
      sx={{ width: '200px', height: '50px', fontSize, color, fontWeight }}
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {content}
    </Button>
  );
};
export default CButton;
