import React, { useState } from 'react';
import LabeledInput from './LabeledInput';
import { CheckboxGroupProps } from '@/util/type/molecules';

const OneCheckbox = ({ labeledinputprops }: CheckboxGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newIndex = selectedIndex === index ? null : index; // 이미 선택된 인덱스 클릭 시 해제
    setSelectedIndex(newIndex);

    // 현재 선택된 항목을 콘솔에 출력
    if (newIndex !== null) {
      console.log('선택된 항목:', labeledinputprops[newIndex].labelprops.text);
    }
  };

  return (
    <div>
      {labeledinputprops.map((option, index) => (
        <LabeledInput
          key={index}
          inputType="Checkbox"
          labelprops={option.labelprops}
          inputprops={{
            ...option.inputprops,
            checked: selectedIndex === index,
            onChange: (e) => handleChange(e, index),
          }}
        />
      ))}
    </div>
  );
};

export default OneCheckbox;
