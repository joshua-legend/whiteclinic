// 분류 불가능한 세척품목 -> 수기작성필요
// type UnusualProductType = {
//   productName: string | undefined;
// };

// 수당 타입
// type DailySalaryType = {
//   dailySalary: number;
// };

// 수당합계 타입
// type TotalSalaryType = {
//   totalSalary: number;
// };

// 고객 정보타입 ( 이름, 전화번호, 의뢰지 ) / 기사 정보타입 ( 이름, 전화번호, 거주지)
type AnyInfoType = {
  name: string | undefined;
  contact: number | string | undefined;
  address: string | undefined;
};

// 특이사항 관련 ( 고객 특이사항, 기사 특이사항, 매출 특이사항 ) 메모타입 + 분류 불가능한 세척품목 -> 수기작성필요
type AllStringType = {
  ps: string | undefined;
};

// 할인율 or 할인여부 수기설정 타입
type DiscountRatioType = {
  discount: number | undefined;
};

// 년도 수기설정 타입
type SpecificYearType = {
  thisYear: number | undefined;
};

// 세척품목 갯수 / 수당 타입 / 수당합계 타입
type AllNumberType = {
  modelEA: number;
};

// 계산식 함수 타입
type CalculateFnType = {
  CalFn: () => void;
};

export type InputProps =
  | AnyInfoType
  | AllStringType
  | DiscountRatioType
  | SpecificYearType
  | AllNumberType
  | CalculateFnType;
