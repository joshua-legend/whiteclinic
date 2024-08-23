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
  //삼항넣기
  return (
    <div>
      {priceNum / divisionNum} {priceUnit}
    </div>
  );
};

export default CalculatePrice;
