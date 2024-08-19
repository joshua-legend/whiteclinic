'use client';

import React, { useState } from 'react';
import { LabelType } from './CheckboxInput';

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      {label}
    </div>
  );
};

export const CheckboxInput = ({ label }: { label: LabelType }) => {
  return <Checkbox label={label} />;
};
