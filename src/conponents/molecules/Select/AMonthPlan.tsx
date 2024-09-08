import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { MonthsPlan } from '@/constants/MonthsPlan';

const AMonthPlan = () => {
  const MonthsPlanOption = MonthsPlan.map((month) => ({ text: month, value: month }));

  return <ADropdownBox label="" options={MonthsPlanOption} width="medium" />;
};

export default AMonthPlan;
