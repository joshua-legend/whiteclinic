import { AvailableThings } from '@/app/constants/AvailableThing';
import GenericRadioGroup from '../../molecules/radioGroup/GenericRadioGroup';
import { Grid } from '@mui/material';

const AvailableRadio = () => {
  const Available = AvailableThings.map((thing) => ({ text: thing, value: thing }));

  return (
    // <Grid container spacing={2}>
    // <Grid item xs={5}>
    <GenericRadioGroup label="가능품목" options={Available} />
    // </Grid>
    // </Grid>
  );
};

export default AvailableRadio;
