import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import LJW_CDropItem, { LJW_CDropItemProps } from './LJW_CDropMenuItem';
import LJW_CDropDownSelect, { LJW_CDropDownSelectProps } from './LJW_CDropdonwSelect';

export type LJW_DropDownListProps = {
  label: string;
};

//세척품목
export const CleaningItem: LJW_DropDownListProps[] = [
  { label: '벽걸이' },
  { label: '원웨이' },
  { label: '포웨이' },
  { label: '스탠드' },
  { label: '투인원' },
  { label: '원형 360 에어컨' },
  { label: '파세코 창문형 에어컨' },
  { label: '사각 덕트' },
  { label: '원형 덕트' },
  { label: '메인 덕트' },
  { label: '통돌이' },
  { label: '드럼' },
  { label: '빌트인' },
  { label: '건조기' },
  { label: '드럼형 아기사랑 세탁기' },
  { label: '통돌이형 아기사랑 세탁기' },
];

type DropMenuItem = {
  label: string | number;
};
export type LJW_CDropdownBoxProps = {
  // dropmenuItemProps: LJW_CDropItemProps;
  dropSelectProps: LJW_CDropDownSelectProps;
  dropItems: DropMenuItem[];
};

const LJW_CDropdownBox = ({
  // dropmenuItemProps,
  dropSelectProps,
  dropItems,
}: LJW_CDropdownBoxProps) => {
  const [isSelected, setisSelected] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setisSelected(event.target.value);
    dropSelectProps.handleChange?.(event);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <LJW_CDropDownSelect
          {...dropSelectProps}
          selectValue={isSelected}
          handleChange={handleChange}
        >
          {dropItems.map((item, i) => (
            <LJW_CDropItem key={i} value={item.label} />
          ))}
        </LJW_CDropDownSelect>
      </FormControl>
    </div>
  );
};

export default LJW_CDropdownBox;
