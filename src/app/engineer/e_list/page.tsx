import React from 'react';
import { EngineerRegister, EngineerWashingMachineCategory } from '@/constants/Engineer'; // EngineerRegister 객체가 정의된 파일에서 import
import EngineerLabel from '@/conponents/molecules/Engineer/EngineerInfo';
import CenterLayout from '@/app/customers/c_list/CenterLayout';

const EngineerRegistrationPage = () => {
  return (
    <CenterLayout
      children={
        <EngineerLabel
          textProps={{}}
          inputProps={{}}
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
      }
    />
  );
};

export default EngineerRegistrationPage;
