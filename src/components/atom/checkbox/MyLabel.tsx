import { Typography } from '@mui/material';
import { AllLabels } from './MyCheckBoxData2';

export type MyLabelProps = {
  label: AllLabels;
};

const MyLabel = ({ label }: MyLabelProps) => {
  return <Typography>{label}</Typography>;
};

export default MyLabel;
