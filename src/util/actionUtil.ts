import { OrderInfoTableRowTextType, SalesInfoTableRowTextType } from '@/constants/definition';
import { SalesInfoModel } from '@/constants/definition';
import { cleaningItemInfo, productInfoTable } from '@/constants/productTable';
/**
 *
 * @param tableRow 테이블 텍스트타입 OrderInfoTableRowTextType | SalesInfoTableRowTextType
 * @param components atomize 컴포넌트
 * @param subComponents 2개 이상 컴포넌트 렌더링 필요할 시 호출
 * @returns
 */
export const writeInfoTable = (
  tableRow: OrderInfoTableRowTextType | SalesInfoTableRowTextType,
  components: JSX.Element,
  subComponents?: JSX.Element
) => {
  return { tableRow, components, subComponents };
};

const isAirconCategory = (salesData: SalesInfoModel) => {
  if (
    [...cleaningItemInfo.airconditional].map(
      (airconItem, index) => airconItem.label === salesData.item
    )
  )
    return 'airconditional';
  else return 'washing';
};

const isCompositeCleaning = (salesData: SalesInfoModel) => {
  const cleaningCategory = salesData.isComposite ? 'composite' : 'regular';
  return cleaningCategory;
};

const isDiscountedPrice = (salesData: SalesInfoModel) => {
  const discountState = salesData.isDiscounted ? true : false;
  return discountState;
};

const adjustItemQuantity = (salesData: SalesInfoModel) => {
  if (salesData.itemQuantity != 0) return salesData.totalPrice * salesData.itemQuantity;
};

const applyDiscount = (salesData: SalesInfoModel) => {
  if (salesData.discountRatio.startsWith('-'))
    return salesData.totalPrice - Number(salesData.discountRatio.split('-')[1]);
  else if (salesData.discountRatio.includes('%'))
    return salesData.totalPrice * (parseFloat(salesData.discountRatio.split('%')[0]) / 100);
};

const getBasePrice = (
  itemCategory: string,
  washCategory: string,
  isDiscounted: boolean,
  itemTimesQuantity: void,
  discountedPrice: number,
  cleaningItemInfo: productInfoTable,
) => {
  itemCategory == 'airconditional' ? cleaningItemInfo.airconditional : cleaningItemInfo.washing
};

export const calculateComplexPrice = (salesData: SalesInfoModel): number => {
  let basePrice = 0;

  const itemCategory = isAirconCategory(salesData);
  const washCategory = isCompositeCleaning(salesData);
  const isDiscounted = isDiscountedPrice(salesData);
  const itemTimesQuantity = adjustItemQuantity(salesData);
  const discountedPrice = applyDiscount(salesData);

  // Get base price
  basePrice = ;

  // Apply discount
  basePrice =
    // Adjust for quantity
    basePrice = adjustForQuantity(basePrice, itemQuantity);

  return basePrice;
};
