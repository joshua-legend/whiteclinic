import { Typography } from '@mui/material';

export type MyLabelProps = {
  label: string;
};

const MyLabel = ({ label }: MyLabelProps) => {
  return <Typography>{label}</Typography>;
};

export default MyLabel;
