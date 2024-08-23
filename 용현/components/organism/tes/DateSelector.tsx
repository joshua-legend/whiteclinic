import { selectDate } from '@/app/constants/Dates';
import GenericDropdownBox from '../../molecules/dropdownBox/GenericDropdownBox';

const DatesSelector = () => {
  const DatesOption = selectDate.map((date) => ({ text: date, value: date }));

  return <GenericDropdownBox label="일" options={DatesOption} />;
};

export default DatesSelector;
