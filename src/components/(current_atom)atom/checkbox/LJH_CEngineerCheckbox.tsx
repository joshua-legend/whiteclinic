import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

type EnginnerLabelType = {
  EngineerName?: string;
  isDisabled?: boolean;
};

const CEngineerCheckbox = ({
  EngineerName = '기사이름',
  isDisabled = false,
}: EnginnerLabelType) => {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label={EngineerName}
          labelPlacement="end"
          disabled={isDisabled}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CEngineerCheckbox;
