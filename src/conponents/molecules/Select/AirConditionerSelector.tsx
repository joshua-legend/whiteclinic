import ADropdownBox from "@/conponents/atom/DropdownBox/ADropdownBox";
import { airConditionerCategories } from "@/constants/productCategory";



const AirConditionerSelector = () => {
    const AirConditionerOption = airConditionerCategories.map((option) => ({text:option, value:option}))

    return <ADropdownBox label="에어컨" options={AirConditionerOption} />;
}

export default AirConditionerSelector;