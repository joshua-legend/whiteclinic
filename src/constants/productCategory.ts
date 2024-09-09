import { airConditionerCategory, washingMachineCategory } from './textType';

type ProductCategoryProps = {
  category: airConditionerCategory | washingMachineCategory;
  comprehensiveWash?: number | null;
  normalWash?: number | null;
};

// 에어컨 카테고리 데이터
export const airConditionerCategories: ProductCategoryProps[] = [
  {
    category: '벽걸이',
    comprehensiveWash: 90000,
    normalWash: 50000,
  },
  {
    category: '원웨이',
    comprehensiveWash: 100000,
    normalWash: 50000,
  },
  {
    category: '포웨이',
    comprehensiveWash: 130000,
    normalWash: 70000,
  },
  {
    category: '스탠드', // 12만~16만
    comprehensiveWash: null,
    normalWash: null,
  },
  {
    category: '투인원', // 18만~23만
    comprehensiveWash: null,
    normalWash: null,
  },
  {
    category: '원형 360',
    comprehensiveWash: 180000,
    normalWash: null,
  },
  {
    category: '파세코 창문형',
    comprehensiveWash: 170000,
    normalWash: null,
  },
  {
    category: '사각 덕트',
    comprehensiveWash: 20000,
    normalWash: null,
  },
  {
    category: '원형 덕트',
    comprehensiveWash: 15000,
    normalWash: null,
  },
  {
    category: '메인 덕트',
    comprehensiveWash: 300000,
    normalWash: null,
  },
  {
    category: '일반 실외기',
    comprehensiveWash: 30000,
    normalWash: null,
  },
  {
    category: '대형 실외기',
    comprehensiveWash: 50000,
    normalWash: null,
  },
];

// 세탁기 카테고리 데이터
export const washingMachineCategories: ProductCategoryProps[] = [
  {
    category: '통돌이 5~17kg',
    comprehensiveWash: 90000,
    normalWash: null,
  },
  {
    category: '통돌이 18~20kg',
    comprehensiveWash: 100000,
    normalWash: null,
  },
  {
    category: '통돌이 21kg~',
    comprehensiveWash: 110000,
    normalWash: null,
  },
  {
    category: '드럼 7~17kg',
    comprehensiveWash: 120000,
    normalWash: null,
  },
  {
    category: '드럼 18~20kg',
    comprehensiveWash: 140000,
    normalWash: null,
  },
  {
    category: '드럼 21kg~',
    comprehensiveWash: 160000,
    normalWash: null,
  },
  {
    category: '드럼 빌트인',
    comprehensiveWash: 140000,
    normalWash: null,
  },
  {
    category: '건조기',
    comprehensiveWash: 250000,
    normalWash: null,
  },
  {
    category: '트윈워시',
    comprehensiveWash: 250000,
    normalWash: null,
  },
  {
    category: '통돌이형 아기사랑 세탁기',
    comprehensiveWash: 70000,
    normalWash: null,
  },
  {
    category: '드럼형 아기사랑 세탁기',
    comprehensiveWash: 100000,
    normalWash: null,
  },
];
