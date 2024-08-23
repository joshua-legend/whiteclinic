import { RadioProps } from '@/util/type/atom';
import MuiRadio from '@mui/material/Radio';

const Radio = ({ checked, onChange }: RadioProps) => {
  return <MuiRadio checked={checked} onChange={onChange} />;
};

export default Radio;
