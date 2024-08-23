import { WORKER } from '@/app/constants/Worker';
import RadioBtn, { RadioBtnProps } from '../../atom/radio/RadioBtn';
import { FormControl, FormLabel } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

export type GenericRadioGroupProps = {
  label: string;
  options: RadioBtnProps[];
};

const GenericRadioGroup = ({ label, options }: GenericRadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <FormControl>
      <FormLabel id={`${label}-radio-buttons-group-label`}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={`${label}-radio-buttons-group-label`}
        name={`${label}-radio-buttons-group`}
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <RadioBtn key={option.value} text={option.text} value={option.value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default GenericRadioGroup;
