import InputComponent from '@/components/atom/CInput';
import { InputPropses } from '@/constants/definition';
import { Typography } from '@mui/material';

//옵션이름+input으로 이루어진 컴포넌트

//에약일시, 고객성함 등 옵션이름 atom을 하나 만들어야할 것 같음
//InputComponent를 CInput으로 이름을 변경해야함.

type OptionInputProps = {
  optionTitle: string;
  inputprops: InputPropses;
};
const OptionInput = ({ optionTitle, inputprops }: OptionInputProps) => {
  return (
    <div className="flex p-1 ">
      <Typography variant="subtitle2">{optionTitle}</Typography>
      <InputComponent {...inputprops} />
    </div>
  );
};

export default OptionInput;
