'use client';

import React from 'react';
import { EngineerRegister, EngineerWashingMachineCategory } from '@/constants/Engineer';
import EnginnerLabel from '@/conponents/molecules/Engineer/LabelInput';

export default function Page() {
  return (
    <EnginnerLabel
      textProps={{}}
      inputProps={{
        label: '',
        variant: 'outlined',
      }}
      checkBoxProps={{
        option: EngineerWashingMachineCategory,
        inputProps: {
          label: '직접입력',
          variant: 'outlined',
        },
        checkBoxProps: {},
      }}
      engneerObject={EngineerRegister}
    />
  );
}
