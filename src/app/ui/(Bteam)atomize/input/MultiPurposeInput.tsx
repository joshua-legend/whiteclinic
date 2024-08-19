import React, { ChangeEvent, useState } from 'react';
import { InputProps } from './inputTypes';
import { Box, TextField } from '@mui/material';
import {
  CustomerInfoInput,
  DiscountRatioInputRenderer,
  DiscountValueRenderer,
  ExtraInfoRenderer,
  ProductQuantityInputRenderer,
  YearInputRenderer,
} from './inputRenderer';

// 여러종류의 양식검증을 위한 다용도 인풋 컴포넌트
export const MultiPurposeInput: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<string | number | undefined>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

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
    }
    return null;
  };

  return <div>{renderInputField()}</div>;
};
