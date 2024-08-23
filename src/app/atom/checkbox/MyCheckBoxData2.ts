enum CheckboxCategory {
  State = 'State',
  Revenue = 'Revenue',
  EngineerName = 'EngineerName',
  Skill = 'Skill',
}

export type CheckboxDataProps =
  | { label: StateLabel; category: CheckboxCategory.State; isChecked: boolean }
  | { label: RevenueLabel; category: CheckboxCategory.Revenue; isChecked: boolean }
  | { label: EngineerNameLabel; category: CheckboxCategory.EngineerName; isChecked: boolean }
  | { label: SkillLabel; category: CheckboxCategory.Skill; isChecked: boolean };

type StateLabel = '발행 완료' | '지급완료';
type RevenueLabel = '종합세척' | '일반세척' | '할인적용';
type EngineerNameLabel = '홍길동' | '아무개' | '임지현' | '이몽룡' | '김콩쥐';
type SkillLabel =
  | '벽걸이'
  | '원웨이'
  | '포웨이'
  | '원형'
  | '스탠드'
  | '실외기'
  | '덕트'
  | '창문형'
  | '통돌이'
  | '드럼'
  | '빌트인'
  | '건조기'
  | '휴무추가';

export type AllLabels = StateLabel | RevenueLabel | EngineerNameLabel | SkillLabel;
