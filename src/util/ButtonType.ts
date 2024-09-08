import { ButtonStyle } from '@/styles/ButtonStyle';

export type ACustomButtonProps = {
  variant: 'text' | 'contained' | 'outlined';
  text: '등록중지' | '취소' | '등록' | '아니오' | '추가등록' | '급여사항확인';
  onClick?: () => void;
  size?: keyof typeof ButtonStyle.size;
  color?: keyof typeof ButtonStyle.color;
  sx?: object;
};
