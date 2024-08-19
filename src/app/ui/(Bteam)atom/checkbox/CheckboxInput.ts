export const labels = [
  '발행완료',
  '일반세척',
  '종합세척',
  '할인적용',
  '지급완료',
  '벽걸이',
  '원웨이',
  '포웨이',
  '원형',
  '스탠드',
  '실외기',
  '덕트',
  '창문형',
  '통돌이',
  '드럼',
  '빌트인',
  '건조기',
  '휴뮤추가',
] as const;

export type LabelType = (typeof labels)[number];
