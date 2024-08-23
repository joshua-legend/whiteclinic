import { FormControlLabel, Radio } from '@mui/material';

export type RadioBtnProps = {
  text: string;
  value: string;
};

const RadioBtn = ({ text, value }: RadioBtnProps) => {
  return (
    <FormControlLabel sx={{ width: '100px' }} value={value} control={<Radio />} label={text} />
  );
};

export default RadioBtn;
