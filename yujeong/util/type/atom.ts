import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { ReactElement } from 'react';

// 라벨
export type LabelProps = {
  text?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: keyof typeof colors.text;
};

// 아이콘
export type IconProps = {
  icon: ReactElement;
  color?: keyof typeof colors.icon;
};

// 버튼
type buttonText = '등록' | '취소' | '추가등록' | '등록중지' | '아니오' | '급여사항확인';

export type ButtonProps = {
  text: buttonText;
  backgroundColor?: keyof typeof colors.background;
  color?: keyof typeof colors.text;
  size?: keyof typeof sizes.width;
  onClick?: () => void;
};

// 체크박스
export type CheckboxProps = {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// 라디오버튼
export type RadioProps = {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// 드롭다운 메뉴 아이템
export type AirConditionerOption =
  | '선택'
  | '스탠드'
  | '벽걸이'
  | '원웨이'
  | '포웨이'
  | '투인원'
  | '원형360'
  | '파세코'
  | '사각 덕트'
  | '원형 덕트'
  | '메인 덕트'
  | '일반 실외기'
  | '대형 실외기';

// 드롭다운 메뉴
export type DropdownOptionProps = {
  value: string | number;
  text: AirConditionerOption;
};

// input
export type TextInputProps = {
  size?: keyof typeof sizes.inputWidth;
  onChange?: (value: string) => void;
};
