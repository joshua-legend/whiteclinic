'use client';
import React, { useState } from 'react';
import { CustomCheckbox } from './CheckboxComponent';

interface CheckboxWrapperProps {
  label: string;
}

const CheckboxWrapper = ({ label }: CheckboxWrapperProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return <CustomCheckbox label={label} checked={isChecked} handleCheck={setIsChecked} />;
};

////////////////////////////////////////////////////////////////////////////////
export const DocumentIssuance = () => <CheckboxWrapper label="발행완료" />;
export const CleaningMethod_nomal = () => <CheckboxWrapper label="일반세척" />;
export const CleaningMethod_Comprehensive = () => <CheckboxWrapper label="종합세척" />;
export const Discount = () => <CheckboxWrapper label="할인적용" />;
export const PaymentStatus = () => <CheckboxWrapper label="지급완료" />;

////////////////////////////////////////////////////////////////////////////////
export const WallMounted = () => <CheckboxWrapper label="벽걸이" />;
export const OneWay = () => <CheckboxWrapper label="원웨이" />;
export const FourWay = () => <CheckboxWrapper label="포웨이" />;
export const CompleteType = () => <CheckboxWrapper label="원형" />;
export const Stand = () => <CheckboxWrapper label="스탠드" />;
export const OutdoorUnit = () => <CheckboxWrapper label="실외기" />;
export const Duct = () => <CheckboxWrapper label="덕트" />;
export const WindowType = () => <CheckboxWrapper label="창문형" />;
export const AnimalType = () => <CheckboxWrapper label="통돌이" />;
export const Drum = () => <CheckboxWrapper label="드럼" />;
export const BuiltIn = () => <CheckboxWrapper label="빌트인" />;
export const Dryer = () => <CheckboxWrapper label="건조기" />;
export const AddDayOff = () => <CheckboxWrapper label="휴뮤추가" />;
