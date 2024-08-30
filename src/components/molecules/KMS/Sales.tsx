import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import InputComponent from '@/components/atom/CInput';
import { CleaningItem } from '@/constants/definition';
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

type Salesrops = {
  title: string;
};

export const Sales = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <CDropDown
        contentName="세척품목"
        contentList={CleaningItem}
        handleChange={handleChange}
        selectedValue={selectedItem}
      />
      <InputComponent />
      <CCheckbox label="종합세척" />
      <CCheckbox label="일반세척" />
      <CCheckbox label="할인적용" />
      <InputComponent />
      <InputComponent />
      <InputComponent />
    </div>
  );
};
