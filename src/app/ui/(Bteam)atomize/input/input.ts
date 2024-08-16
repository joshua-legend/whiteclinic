// 고객 정보타입 ( 이름, 전화번호, 의뢰지 ) / 기사 정보타입 ( 이름, 전화번호, 거주지)
export type AnyInfoType = {
  name: string | undefined;
  contact: number | string | undefined;
  address: string | undefined;
};

// 특이사항 관련 ( 고객 특이사항, 기사 특이사항, 매출 특이사항 ) 메모타입 + 분류 불가능한 세척품목 -> 수기작성필요
export type AllStringType = {
  ps: string | undefined;
};

// 분류 불가능한 세척품목 -> 수기작성필요
// type UnusualProductType = {
//   productName: string | undefined;
// };

// 할인율 or 할인여부 수기설정 타입
export type DiscountRatioType = {
  discount: number | undefined;
};

// 년도 수기설정 타입
export type SpecificYearType = {
  thisYear: number | undefined;
};

// 세척품목 갯수 / 수당 타입 / 수당합계 타입
export type AllNumberType = {
  modelEA: number;
};

// 수당 타입
// type DailySalaryType = {
//   dailySalary: number;
// };

// 수당합계 타입
// type TotalSalaryType = {
//   totalSalary: number;
// };

// 계산식 함수 타입
export type CalculateFnType = {
  CalFn: () => void;
};
