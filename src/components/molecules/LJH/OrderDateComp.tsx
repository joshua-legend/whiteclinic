import CDatePicker from '@/components/atom/CDatePicker';
import { datePickerProps } from '@/constants/definition';
import { Box } from '@mui/material';

const OrderDateComp = ({ label, value, handleChange }: datePickerProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'col',
        border: '2px solid black',
        width: '300px',
      }}
    >
      <div>test</div>
      <CDatePicker value={value} label={label} handleChange={handleChange}></CDatePicker>
    </Box>
  );
};

export default OrderDateComp;
