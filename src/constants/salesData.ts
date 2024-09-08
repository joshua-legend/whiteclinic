import { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import { CheckboxTextType } from './textType';

// 종합세척, 일반세척 체크박스
export const washCheckboxData: { [key: string]: CheckboxProps } = {
  comprehensiveWash: {
    isCheck: false,
    onChange: () => {},
    textprops: { text: '종합세척' as CheckboxTextType },
  },
  normalWash: {
    isCheck: false,
    onChange: () => {},
    textprops: { text: '일반세척' as CheckboxTextType },
  },
};

// 할인적용 체크박스
export const discountCheckboxData: { [key: string]: CheckboxProps } = {
  discount: {
    isCheck: false,
    onChange: () => {},
    textprops: { text: '할인적용' as CheckboxTextType },
  },
};

// 매출사항 버튼
export const salesButtonData = [
  {
    variant: 'contained' as const,
    text: '취소' as const,
    onClick: () => console.log('취소 버튼 클릭됨'),
    size: 'medium' as const,
  },
  {
    variant: 'contained' as const,
    text: '등록' as const,
    onClick: () => console.log('등록 버튼 클릭됨'),
    size: 'medium' as const,
    color: 'primary' as const,
  },
];

// 추가등록 모달
export const salesModalData = {};

// 일반세척 모달 버튼
export const normalWashModalData = {
  textprops: {
    text: '일반세척으로 진행하는 게 맞습니까?',
    size: 'large' as const,
  },
  abuttonprops: [
    {
      variant: 'contained' as const,
      text: '아니오' as const,
      size: 'medium' as const,
    },
    {
      variant: 'contained' as const,
      text: '등록' as const,
      size: 'medium' as const,
      color: 'primary' as const,
    },
  ],
};
