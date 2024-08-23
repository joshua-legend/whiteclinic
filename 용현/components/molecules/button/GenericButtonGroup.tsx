import GenericButton, { ButtonProps } from '../../atom/button/GenericButton';

export type ButtonGroupProps = {
  pri_property: ButtonProps;
  sec_property: ButtonProps;
  // onChange?: () => void;
};

const GenericButtonGroup = ({ pri_property, sec_property /*onChange*/ }: ButtonGroupProps) => {
  return (
    <div className="flex">
      <GenericButton {...pri_property} /*onChange={onChange}*/ />
      <GenericButton {...sec_property} /*onChange={onChange}*/ />
    </div>
  );
};

export default GenericButtonGroup;
