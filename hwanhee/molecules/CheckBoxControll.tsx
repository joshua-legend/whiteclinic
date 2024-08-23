import { FormControlLabelProps } from "@/util/type/CheckBoxType";
import { FormControlLabel } from "@mui/material";
import CustomCheckbox from "../atom/CheckBox";

const CustomCheckboxControl = ({ label, CheckBoxProps }: FormControlLabelProps) => {
    return (
        <FormControlLabel
        control={<CustomCheckbox {...CheckBoxProps} />}
        label={label}
      />
    );
  };

  export default CustomCheckboxControl;