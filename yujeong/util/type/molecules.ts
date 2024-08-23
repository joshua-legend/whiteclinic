import {
  ButtonProps,
  CheckboxProps,
  IconProps,
  LabelProps,
  RadioProps,
  TextInputProps,
} from './atom';

// 링크 버튼
export type LinkButtonProps = {
  href: string;
  iconprops: IconProps;
  labelprops: LabelProps;
};

// 섹션 타이틀
export type SectionTitleProps = {
  iconprops: IconProps;
  labelprops: LabelProps;
};

// 체크박스/라디오버튼 + 라벨
export type LabeledInputProps =
  | { inputType: 'Checkbox'; labelprops: LabelProps; inputprops: CheckboxProps }
  | { inputType: 'Radio'; labelprops: LabelProps; inputprops: RadioProps };

// 버튼
export type ButtonGroupProps = {
  buttonprops: ButtonProps[];
};

// input
export type ComposedInputProps = {
  iconprops: IconProps;
  textinputprops: TextInputProps;
};

export type CheckboxGroupProps = {
  labeledinputprops: Omit<LabeledInputProps, 'inputType'>[];
}
