import { Percentage } from '@/app/constants/Percentage';
import GenericDropdownBox from '../../molecules/dropdownBox/GenericDropdownBox';

const Percent = () => {
  const PercentOption = Percentage.map((per) => ({ text: per, value: per }));

  return <GenericDropdownBox label="수당률" options={PercentOption} />;
};
export default Percent;
