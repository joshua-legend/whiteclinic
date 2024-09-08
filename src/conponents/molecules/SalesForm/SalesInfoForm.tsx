import { Box } from '@mui/material';
import TitledFormControl, { TitledFormControlProps } from './TitledFormControl';

type SalesInfoFormProps = {
  titledformcontrolprops: TitledFormControlProps[];
};

const SalesInfoForm = ({ titledformcontrolprops }: SalesInfoFormProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}>
      {titledformcontrolprops.map((prevprops, index) => (
        <TitledFormControl key={index} {...prevprops} />
      ))}
    </Box>
  );
};

export default SalesInfoForm;
