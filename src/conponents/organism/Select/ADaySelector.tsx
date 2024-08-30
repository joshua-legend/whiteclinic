import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Days } from '@/constants/Days';

const ADaySelector = () => {
  const DayOption = Days.map((day) => ({ text: day, value: day }));

  return <ADropdownBox label="" options={DayOption} />;
};

export default ADaySelector;
