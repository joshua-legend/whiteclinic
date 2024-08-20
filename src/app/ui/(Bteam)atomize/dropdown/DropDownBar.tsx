'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropDownListProps } from './DropDownList';

type DropDownBarProps = {
  contentName: string;
  contentList: DropDownListProps[];
};

const DropDownBar = ({ contentName, contentList }: DropDownBarProps) => {
  const [isSelected, setIsSelected] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIsSelected(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{contentName}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={isSelected}
        label={contentName}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>선택안함</em>
        </MenuItem>
        {contentList.map((item, i) => (
          <MenuItem key={i} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownBar;
