import ADropdownBox from "@/conponents/atom/DropdownBox/ADropdownBox";
import { Months } from "@/constants/Months";

const AMonthSelector = () => {
  const MonthsOption = Months.map((month) => ({ text: month, value: month }));
  return <ADropdownBox label="월" options={MonthsOption} />;
};

export default AMonthSelector;
