import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Percentage } from '@/constants/Percentage';

const APercent = () => {
  const PercentOption = Percentage.map((per) => ({ text: per, value: per }));

  return <ADropdownBox label="수당률" options={PercentOption} />;
};
export default APercent;
