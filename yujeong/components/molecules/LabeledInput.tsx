import Label from "../atom/Label";
import { LabeledInputProps } from "@/util/type/molecules";
import Checkbox from "@/components/atom/Checkbox";
import Radio from "@/components/atom/Radio";
import { FormControlLabel } from "@mui/material";

const inputComponentMap = {
    Checkbox,
    Radio
}

const LabeledInput = ({ inputType, labelprops, inputprops } : LabeledInputProps) => {
    // inputType에 따라 Checkbox 또는 Radio 컴포넌트를 선택
    const InputComponent = inputComponentMap[inputType];

    return (
        <FormControlLabel
            control={<InputComponent {...inputprops} />}
            label={<Label {...labelprops} />}
            sx={{ cursor: 'pointer', userSelect: 'none' }}
        />
    );
}

export default LabeledInput;