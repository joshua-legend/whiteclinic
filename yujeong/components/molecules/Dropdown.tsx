'use client';

import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DropdownOptionProps } from '@/util/type/atom';

export type DropdownProps = {
  dropdownOptions: DropdownOptionProps[];
};

const Dropdown = ({ dropdownOptions }: DropdownProps) => {
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = dropdownOptions.find(opt => opt.value === event.target.value);
    if (selectedOption) {
      setOption(event.target.value as string);
      console.log('선택된 옵션:', selectedOption.text); // 선택된 옵션의 텍스트 출력
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* value가 ''인 옵션은 선택되지 않았을 때만 보여줌 */}
          {option === '' && (
            <MenuItem value="">
              선택
            </MenuItem>
          )}
          {/* 그 외 옵션들을 표시 */}
          {dropdownOptions.slice(1).map((dropdownOption) => (
            <MenuItem key={dropdownOption.value} value={dropdownOption.value}>
              {dropdownOption.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
