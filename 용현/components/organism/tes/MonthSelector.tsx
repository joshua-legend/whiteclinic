import { Months } from '@/app/constants/Months';
import GenericDropdownBox from '../../molecules/dropdownBox/GenericDropdownBox';

const MonthSelector = () => {
  const MonthsOption = Months.map((month) => ({ text: month, value: month }));
  return <GenericDropdownBox label="월" options={MonthsOption} />;
};

export default MonthSelector;
