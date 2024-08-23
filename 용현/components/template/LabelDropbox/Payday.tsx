import Label from '../../atom/label/Label';
import DaySelector from '../../organism/tes/DaySelector';

const Payday = () => {
  return (
    <div className="flex items-center">
      <Label text="급여요일" color="black" />
      <DaySelector />
    </div>
  );
};
export default Payday;
