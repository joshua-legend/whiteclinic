import CDatePicker from '@/components/atom/CDatePicker';
import { datePickerProps } from '@/constants/definition';
import { useState } from 'react';

const OrderDateComp = ({ label, value, onChange }: datePickerProps) => {
  return (
    <div className="border-solid border-blue-400 w-60">
      <CDatePicker value={value} label={label} onChange={onChange}></CDatePicker>
    </div>
  );
};

export default OrderDateComp;
