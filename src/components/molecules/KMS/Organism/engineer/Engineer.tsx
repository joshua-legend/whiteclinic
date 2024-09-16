import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { engineerCreateData, EngineerInfoModel, skillArr } from '@/constants/definition';

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';
import { CModal } from '../../Melecules/engineer/CModal';
import { useEffect, useState } from 'react';
import { EngineerTable } from './EngineerTable';

// 상태의 기본값을 지정해줌
export const Engineer = () => {
  const [showModal, setModal] = useState(false); // 확인모달
  const [checkBoxState, setCheckBoxState] = useState<boolean[]>(Array(12).fill(false)); //체크박스 상태저장(boolean)
  const [checkBoxString, setcheckBoxString] = useState<string>(''); //체크박스라벨 저장(string)
  const [engineerData, setEngineerData] = useState<EngineerInfoModel>({
    name: '',
    number: '',
    address: '',
    addskill: '',
    issue: '',
  });

  useEffect(() => {
    const inputData = localStorage.getItem('inputData');
    const nameData = localStorage.getItem('name');

    if (inputData) {
      const inputDataChange = JSON.parse(inputData);
      setEngineerData((prevData) => ({
        ...prevData,
        number: inputDataChange[0] || '',
        address: inputDataChange[1] || '',
        issue: inputDataChange[3] || '',
        regularDay: inputDataChange[4] || '',
        irregular: inputDataChange[5] || '',
      }));

      if (inputDataChange[2]) {
        const checkedSkills = inputDataChange[2].split(',');
        setcheckBoxString(checkedSkills);
        console.log('checkedSkills : ', checkedSkills);
      }
    }

    if (nameData) {
      const nameDataChange = nameData;
      setEngineerData((prevData) => ({
        ...prevData,
        name: nameDataChange || '',
      }));
    }
  }, []);

  // 로컬스토리지의 값을 기반으로 체크박스 상태 업데이트
  useEffect(() => {
    const updatedCheckBoxState = skillArr.map((skill) => checkBoxString.includes(skill));
    setCheckBoxState(updatedCheckBoxState);
  }, [checkBoxString]);

  //인풋 상태관리
  const EngineerInfoChangeHandler = (key: keyof EngineerInfoModel, value: string) => {
    setEngineerData((prev) => ({ ...prev, [key]: value }));
    console.log(engineerData);
  };

  //체크박스 상태관리 함수
  const toggle = (index: number, value: string) => {
    setCheckBoxState((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      console.log(value);
      return newState;
    });
  };

  return (
    <Box sx={{ margin: '24px' }}>
      <EngineerTable
        engineerData={engineerData}
        onEngineerChange={EngineerInfoChangeHandler}
        CheckBoxState={checkBoxState}
        onToggle={toggle}
      />
      <ButtonTwo
        leftButton="취소"
        leftColor="black"
        leftBgColor="gray"
        rightButton="등록"
        onRightButton={() => setModal(true)}
      />
      <CModal title="해당 내용으로 기사정보를 등록하시겠습니까?" open={showModal}>
        {ButtonTwo({
          leftButton: '아니오',
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
          onLeftButton: () => setModal(false),
        })}
      </CModal>
    </Box>
  );
};
