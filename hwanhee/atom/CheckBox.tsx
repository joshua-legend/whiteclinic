import { CheckBoxProps } from "@/util/type/CheckBoxType";
import { Checkbox } from "@mui/material";

const CustomCheckbox = ({ checked, onChange }: CheckBoxProps) => (
    <Checkbox
      checked={checked}
      onChange={onChange}
    />
  );

  export default CustomCheckbox;