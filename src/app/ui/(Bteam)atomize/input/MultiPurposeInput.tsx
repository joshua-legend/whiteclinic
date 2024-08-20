import React from 'react';
import {
  CustomerInfoInput,
  DailyIncomeInputRenderer,
  DiscountRatioInputRenderer,
  DiscountValueRenderer,
  ExtraInfoRenderer,
  ProductNameInputRenderer,
  ProductQuantityInputRenderer,
  TotalIncomeInputRenderer,
  YearInputRenderer,
} from './inputRenderer';
import InputProps from './inputTypes';

// 여러종류의 양식검증을 위한 다용도 인풋 컴포넌트
export const MultiPurposeInput: React.FC<InputProps> = (props) => {
  const renderInputField = () => {
    if ('name' in props && 'contact' in props && 'address' in props) {
      return <CustomerInfoInput name="고객 성함" contact="고객 연락처" address="주소지" />;
    } else if ('ps' in props) {
      return <ExtraInfoRenderer ps="특이사항을 적어주세요." />;
    } else if ('discount' in props) {
      return <DiscountRatioInputRenderer discount={15} CalFn={() => console.log('CalFn Called')} />;
    } else if ('thisYear' in props) {
      return <YearInputRenderer thisYear={2024} />;
    } else if ('modelEA' in props) {
      return <ProductQuantityInputRenderer modelEA={1} />;
    } else if ('calResult' in props) {
      return <DiscountValueRenderer calResult={0} />;
    } else if ('dailyIncome' in props) {
      return <DailyIncomeInputRenderer dailyIncome={0} />;
    } else if ('totalIncome' in props) {
      return <TotalIncomeInputRenderer totalIncome={0} />;
    } else if ('productName' in props) {
      return <ProductNameInputRenderer productName="분류 불가능한 세척품목" />;
    }
    return null;
  };

  // TODO : object 로 변경
  return <div>{renderInputField()}</div>;
};
