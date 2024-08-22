export enum CheckboxCategory {
  State = 'State',
  Revenue = 'Revenue',
  EngineerName = 'EngineerName',
  Skill = 'Skill',
  Input = 'Input',
}

export type CheckboxDataProps = {
  label: string;
  category: CheckboxCategory;
  isChecked: boolean;
};

export const CheckboxData: CheckboxDataProps[] = [
  { label: '발행 완료', category: CheckboxCategory.State, isChecked: false },
  { label: '지급완료', category: CheckboxCategory.State, isChecked: true },

  { label: '종합세척', category: CheckboxCategory.Revenue, isChecked: true },
  { label: '일반세척', category: CheckboxCategory.Revenue, isChecked: false },
  { label: '할인적용', category: CheckboxCategory.Revenue, isChecked: true },

  { label: '홍길동', category: CheckboxCategory.EngineerName, isChecked: false },
  { label: '아무개', category: CheckboxCategory.EngineerName, isChecked: true },
  { label: '임지현', category: CheckboxCategory.EngineerName, isChecked: false },
  { label: '이몽룡', category: CheckboxCategory.EngineerName, isChecked: true },
  { label: '김콩쥐', category: CheckboxCategory.EngineerName, isChecked: false },

  { label: '벽걸이', category: CheckboxCategory.Skill, isChecked: true },
  { label: '원웨이', category: CheckboxCategory.Skill, isChecked: false },
  { label: '포웨이', category: CheckboxCategory.Skill, isChecked: true },
  { label: '원형', category: CheckboxCategory.Skill, isChecked: false },
  { label: '스탠드', category: CheckboxCategory.Skill, isChecked: true },
  { label: '실외기', category: CheckboxCategory.Skill, isChecked: false },
  { label: '덕트', category: CheckboxCategory.Skill, isChecked: true },
  { label: '창문형', category: CheckboxCategory.Skill, isChecked: false },
  { label: '통돌이', category: CheckboxCategory.Skill, isChecked: true },
  { label: '드럼', category: CheckboxCategory.Skill, isChecked: false },
  { label: '빌트인', category: CheckboxCategory.Skill, isChecked: true },
  { label: '건조기', category: CheckboxCategory.Skill, isChecked: false },
  { label: '휴무추가', category: CheckboxCategory.Skill, isChecked: true },
];
