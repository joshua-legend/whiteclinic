import { Days } from '@/app/constants/Days';
import { text } from 'stream/consumers';
import GenericDropdownBox from '../../molecules/dropdownBox/GenericDropdownBox';

const DaySelector = () => {
  const DayOption = Days.map((day) => ({ text: day, value: day }));

  return <GenericDropdownBox label="" options={DayOption} />;
};

export default DaySelector;
