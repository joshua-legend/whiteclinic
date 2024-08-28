import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DropDownBarProps } from '@/constants/definition';

const CDropDown = ({ contentName, contentList, selectedValue, handleChange }: DropDownBarProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{contentName}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedValue}
        label={contentName}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>선택안함</em>
        </MenuItem>
        {contentList?.map((item, i) => (
          <MenuItem key={i} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CDropDown;
