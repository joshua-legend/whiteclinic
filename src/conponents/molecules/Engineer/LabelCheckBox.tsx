'use client';

import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ACheckbox, { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import ABasicInput, { ABasicInputProps } from '@/conponents/atom/Input/Basic/ABasicInput';

export type LabelCheckBoxProps = {
  checkBoxProps: Omit<CheckboxProps, 'isCheck' | 'onChange' | 'textprops'>;
  inputProps: ABasicInputProps;
  option: string[];
};

const LabelCheckBox: React.FC<LabelCheckBoxProps> = ({ checkBoxProps, inputProps, option }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedKeys((prev) => {
      const newKeys = event.target.checked ? [...prev, key] : prev.filter((k) => k !== key);
      if (newKeys.length > 0) {
        console.log(`선택된 항목: ${newKeys.join(', ')}`);
      } else {
        console.log('선택된 항목이 없습니다.');
      }
      return newKeys;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('기타 입력:', event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <Grid container spacing={0} sx={{ marginBottom: 0 }}>
        {option.map((v) => (
          <Grid item xs={1.8} key={v}>
            <ACheckbox
              isCheck={selectedKeys.includes(v)}
              onChange={handleChange(v)}
              textprops={{ text: v }}
              {...checkBoxProps}
            />
          </Grid>
        ))}
      </Grid>

      <ABasicInput {...inputProps} onChange={handleInputChange} />
    </Box>
  );
};

export default LabelCheckBox;
