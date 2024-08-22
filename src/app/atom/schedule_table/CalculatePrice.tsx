export type CalculatePriceProps = {
  priceNum: number;
  divisionNum?: number;
  priceUnit?: string;
};

const CalculatePrice = ({
  priceNum,
  divisionNum = 10000,
  priceUnit = '만원',
}: CalculatePriceProps) => {
  return (
    <div>
      {priceNum / divisionNum} {priceUnit}
    </div>
  );
};

export default CalculatePrice;
