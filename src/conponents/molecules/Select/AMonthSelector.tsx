import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Months, monthTextWithvalue } from '@/constants/Months';

const AMonthSelector = () => <ADropdownBox label="월" options={monthTextWithvalue} />;

export default AMonthSelector;
