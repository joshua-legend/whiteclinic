import { checkboxProps } from '@/constants/definition';
import { Checkbox, FormControlLabel } from '@mui/material';

/**
 * @param label 체크박스 라벨 리스트
 * @param handleChange 체크박스 상태변화 추적함수 전달
 * @param isChecked 체크박스 렌더링 시 체크여부 기본값 boolean으로 전달
 * @returns FormContrlLabel 태그와 함께 자식태그로 Checkbox MUI 컴포넌트 반환
 */
const CCheckbox = ({ label = '원웨이', handleChange, isChecked = true }: checkboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={isChecked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default CCheckbox;
