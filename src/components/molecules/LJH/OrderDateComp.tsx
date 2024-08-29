import CDatePicker from '@/components/atom/CDatePicker';
import { datePickerProps } from '@/constants/definition';

const OrderDateComp = ({ label, value, handleChange }: datePickerProps) => {
  return (
    <div className="border-solid border-blue-400 w-60">
      <CDatePicker value={value} label={label} handleChange={handleChange}></CDatePicker>
    </div>
  );
};

export default OrderDateComp;
