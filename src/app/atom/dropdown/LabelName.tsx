import { InputLabel } from '@mui/material';

export type LabelNameProps = {
  contentName?: string;
  id?: string;
};

const LabelName = ({ contentName = 'default label', id = 'default labelId' }: LabelNameProps) => {
  return <InputLabel id={id}>{contentName}</InputLabel>;
};

export default LabelName;
