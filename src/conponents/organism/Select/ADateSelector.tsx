import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { selectDate } from '@/constants/Dates';

const ADatesSelector = () => {
  const DatesOption = selectDate.map((date) => ({ text: date, value: date }));

  return <ADropdownBox label="일" options={DatesOption} />;
};

export default ADatesSelector;
