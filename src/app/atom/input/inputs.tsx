import { sizes } from '@/styles/sizes';
import { TextField } from '@mui/material';

// 할인율 함수 타입
type discountFnType = {
  CalFn: () => void;
};

// 인풋라벨 타입
type labelType =
  | '고객 성함'
  | '고객 연락처'
  | '고객 주소지'
  | '특이사항'
  | '할인율'
  | '연도'
  | '수당'
  | '수당 합계'
  | '제품명 입력';

// 인풋 플레이스홀더 타입
type inputPlaceholderType =
  | '홍길동'
  | '010 - 0000 - 0000'
  | '상세 주소를 입력하세요'
  | '특이사항 있을 시 추가'
  | '할인율을 입력하세요'
  | '할인 금액 출력'
  | '수량'
  | '분류 불가능한 세척품목';

// 인풋 프롭 유니온타입 지정
type InputPropses = {
  labelProp?: labelType;
  placeholderProp?: inputPlaceholderType;
  functionProp?: discountFnType;
  type?: 'number' | 'text';
  color?: object;
  isReadOnly?: boolean;
};

const InputComponent = ({
  placeholderProp,
  functionProp,
  labelProp,
  isReadOnly,
  type,
  color,
}: InputPropses) => {
  return (
    <TextField
      sx={{
        ...sizes.inputSize,
        color,
      }}
      placeholder={placeholderProp}
      InputProps={{ readOnly: isReadOnly }}
      label={labelProp}
      type={type}
      onChange={functionProp?.CalFn}
    />
  );
};

export default InputComponent;
