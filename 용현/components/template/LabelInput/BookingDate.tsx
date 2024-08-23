import Input, { InputProps } from '../../atom/input/Input';
import Label, { LabelProps } from '../../atom/label/Label';
import DatesSelector from '../../organism/tes/DateSelector';
import MonthSelector from '../../organism/tes/MonthSelector';

// type LabelInputProps = {
//   labelprops: LabelProps;
//   inputprops: InputProps;
// };

const BookingDate = () => {
  return (
    <div className=" flex items-center border-b-2 gap-2">
      <Label text="예약일시" color="black" />
      <Input placeholder="년(자)" />
      <MonthSelector />
      <DatesSelector />
    </div>
  );
};

export default BookingDate;
