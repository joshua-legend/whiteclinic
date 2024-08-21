// 분류 불가능한 세척품목 -> 수기작성필요
type UnusualProductType = {
  productName?: string;
};

// 수당 타입 퍼센티지 적용 -> 원으로 표기
type DailyIncomeType = {
  dailyIncome?: number;
};

// 수당합계 타입 퍼센티지 적용 -> 원으로 표기
type TotalIncomeType = {
  totalIncome?: number;
};

// 고객 정보타입 ( 이름, 전화번호, 의뢰지 ) / 기사 정보타입 ( 이름, 전화번호, 거주지)
type AnyInfoType = {
  name?: string;
  contact?: string;
  address?: string;
};

// 특이사항 관련 ( 고객 특이사항, 기사 특이사항, 매출 특이사항 ) 메모타입 + 분류 불가능한 세척품목 -> 수기작성필요
type AllStringType = {
  ps?: string;
};

// 할인율 or 할인여부 수기설정 타입
type DiscountRatioType = {
  discount?: number;
  CalFn: () => void;
};

// 년도 수기설정 타입
type SpecificYearType = {
  thisYear?: number;
};

// 세척품목 갯수
type AllNumberType = {
  modelEA?: number;
};

// 계산식 함수 타입
type CalculateFnType = {
  calResult?: number;
};

type inputPlaceholderType =
  | '고객 성함'
  | '고객 연락처'
  | '고객 주소지'
  | '특이사항 입력'
  | '할인율을 입력하세요'
  | '할인 금액 출력'
  | '2024'
  | '수량'
  | '분류 불가능한 세척품목';

// 인풋 프롭 유니온타입 지정
type InputProps =
  | Partial<AnyInfoType>
  | AllStringType
  | DiscountRatioType
  | SpecificYearType
  | AllNumberType
  | CalculateFnType
  | TotalIncomeType
  | DailyIncomeType
  | UnusualProductType;

export default InputProps;
