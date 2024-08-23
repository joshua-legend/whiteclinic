export type CheckBoxProps = {
    checked: boolean;
    onChange: () => void;
  };

export type FormControlLabelProps = {
    label: string;
    CheckBoxProps: CheckBoxProps;
}