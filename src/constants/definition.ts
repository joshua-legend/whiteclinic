import { allType } from '@/components/(current_atom)atom/checkbox/()minsuk_checkbox/KMS_CCheckboxData';
import { sizes } from '@/styles/sizes';
import dayjs, { Dayjs } from 'dayjs';

type ButtonContent = '취소' | '등록' | '등록중지' | '추가등록' | '아니오' | '급여사항확인';
type btnType = 'button' | 'submit' | 'reset';
type fontSizeProps = keyof typeof sizes.fontSize;
type fontWeightProps = keyof typeof sizes.fontWeight;

export type CButtonProps = {
  content: ButtonContent;
  fontSize?: fontSizeProps;
  fontWeight?: fontWeightProps;
  color?: string;
  type?: btnType;
  onClick?: () => void;
};

export type checkboxProps = {
  label: allType;
  isChecked?: boolean;
  handleChange?: () => void;
};

export type productDropownList = {
  label?: string;
};

export type NumberInputType = {
  handleChange: () => void;
};

export const CleaningItem: productDropownList[] = [
  { label: '벽걸이' },
  { label: '원웨이' },
  { label: '포웨이' },
  { label: '스탠드' },
  { label: '투인원' },
  { label: '원형 360 에어컨' },
  { label: '파세코 창문형 에어컨' },
  { label: '사각 덕트' },
  { label: '원형 덕트' },
  { label: '메인 덕트' },
  { label: '통돌이' },
  { label: '드럼' },
  { label: '트윈워시' },
  { label: '건조기' },
  { label: '드럼형 아기사랑 세탁기' },
  { label: '통돌이형 아기사랑 세탁기' },
  { label: '일반 실외기' },
  { label: '대형 실외기' },
];
export const paymentOptions: productDropownList[] = [
  { label: '계좌이체' },
  { label: '카드결제' },
  { label: '숨고페이' },
  { label: '현장현금결제' },
];

export const Documents: productDropownList[] = [
  { label: '간이영수증' },
  { label: '세금계산서' },
  { label: '현금영수증' },
  { label: '카드영수증' },
  { label: '필요없음' },
];

export type DropDownBarProps = {
  contentName: string;
  contentList: productDropownList[];
  handleChange: () => void;
  selectedValue: string | number;
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
  | '- 를 제외하고 입력하세요'
  | '주소지를 정확히 입력하세요'
  | '특수문자를 사용할 수 없습니다.'
  | '숫자를 입력할 수 없습니다.'
  | '문자열만 입력 가능합니다.'
  | '숫자만 입력 가능합니다.'
  | ' ';

// 인풋 플레이스홀더 타입
type inputPlaceholderType =
  | '이름을 입력하세요'
  | '`-` 를 제외하고 입력하세요'
  | '상세 주소를 입력하세요'
  | '특이사항이 있을 시 기입하세요.'
  | '할인율을 입력하세요'
  | '할인 금액 출력'
  | '수량'
  | '분류 불가능한 세척품목'
  | '연도 입력';

// 인풋 프롭 유니온타입 지정
export type InputPropses = {
  inputID?: string;
  labelProp?: labelType;
  placeholderProp?: inputPlaceholderType;
  handleInput?: () => void;
  minValue?: number;
  maxValue?: number;
  adornment?: '원';
  type?: 'number' | 'text';
  color?: object;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  helperText?: helperTextType;
  variableValue?: number | string;
  containerWidth?: string;
};

export const hideNumberInputArrows = {
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
};

// 현재 날짜 초기화
export const TODAY = dayjs();
export const CURRENT_YEAR = TODAY.year();
export const CURRENT_MONTH = TODAY.month() + 1; // dayjs에서 month()는 0-11을 반환
export const CURRENT_DAY = TODAY.date();

// 1900년 1월 1일을 minDate로 설정
export const MIN_DATE = dayjs(`${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`);

export type datePickerProps = {
  label?: '일정 선택';
  value?: Dayjs | null;
  onChange?: () => void;
};
