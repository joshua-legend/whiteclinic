'use client';

import CCheckbox from '@/components/atom/CCheckbox';
import { engineerName, PersonName } from '@/constants/definition';
import { CheckBoxListStyle } from '@/styles/customize';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export const CheckboxList = () => {
  const [nameList, setNameList] = useState<boolean[]>(Array(PersonName.length).fill(false));
  const isAnyChecked = nameList.some((isCheckd) => isCheckd);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  //체크박스 상태관리 함수
  const toggle = (index: number, name: string) => {
    console.log({ index, name });

    setNameList((prev) => {
      setName(name);
      const newState = [...prev];
      newState[index] = !newState[index];

      return newState;
    });
  };

  //이름 리스트 뿌려주기
  const EngineerNames = () => {
    return PersonName.map((name, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <CCheckbox<engineerName>
          key={index}
          label={name}
          isChecked={nameList[index]}
          width="100px"
          handleChange={() => toggle(index, name)}
          isAnyChecked={isAnyChecked ? !nameList[index] : false}
        />
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        ...CheckBoxListStyle,
      }}
    >
      <EngineerNames />
    </Box>
  );
};
