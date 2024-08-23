import Label from '../../atom/label/Label';
import Percent from '../../organism/tes/Percent';

const PayPercent = () => {
  return (
    <div className="flex items-center">
      <Label text="수당률" color="black" />
      <Percent />
    </div>
  );
};

export default PayPercent;
