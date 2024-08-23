import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

type OptionsProps = {
  value: string;
  text: string;
};

type GenericDropdownBoxProps = {
  label: string;
  options: OptionsProps[];
};

const GenericDropdownBox = ({ label, options }: GenericDropdownBoxProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    console.log(value);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ maxWidth: 120, minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${label}-simple-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-simple-select-label`}
          id={`${label}-simple-select`}
          value={selectedValue}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default GenericDropdownBox;
