import { currentYear } from '@/app/types';
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

type helperTextType =
  | '이름을 정확히 입력하세요'
  | '- 를 포함하여 입력하세요'
  | '주소지를 정확히 입력하세요'
  | '특수문자를 사용할 수 없습니다.'
  | '숫자를 입력할 수 없습니다.'
  | '문자열만 입력 가능합니다.'
  | '숫자만 입력 가능합니다.'
  | ' ';

// 인풋 플레이스홀더 타입
type inputPlaceholderType =
  | '홍길동'
  | '010 - 0000 - 0000'
  | '상세 주소를 입력하세요'
  | '특이사항 있을 시 추가'
  | '할인율을 입력하세요'
  | '할인 금액 출력'
  | '수량'
  | '분류 불가능한 세척품목'
  | typeof currentYear;

// 인풋 프롭 유니온타입 지정
type InputPropses = {
  labelProp?: labelType;
  placeholderProp?: inputPlaceholderType;
  functionProp?: discountFnType;
  minValue?: number;
  maxValue?: number;
  adornment?: '원' | '만원';
  type?: 'number' | 'text';
  color?: object;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  helperText?: helperTextType;
};

const hideNumberInputArrows = {
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
};

const InputComponent = ({
  placeholderProp,
  functionProp,
  labelProp,
  isReadOnly = false,
  isDisabled = false,
  adornment = '원',
  type = 'text',
  color,
  minValue,
  maxValue,
  helperText = ' ',
}: InputPropses) => {
  return (
    <TextField
      sx={{
        ...sizes.inputSize,
        color,
        ...(type === 'number' && hideNumberInputArrows), // number 타입에만 적용
      }}
      placeholder={placeholderProp}
      InputProps={{
        inputProps: { min: minValue, max: maxValue },
        readOnly: isReadOnly,
        endAdornment: adornment,
        disabled: isDisabled,
      }}
      label={labelProp}
      type={type}
      onChange={functionProp?.CalFn}
      helperText={helperText}
    />
  );
};

export default InputComponent;
