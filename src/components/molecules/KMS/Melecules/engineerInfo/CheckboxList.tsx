import CCheckbox from '@/components/atom/CCheckbox';
import { engineerName } from '@/constants/definition';
import { CheckBoxListStyle } from '@/styles/customize';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useEngineerStore } from '../../Organism/EngineerTotalInfo/stoeres/EngineerStore';

export const CheckboxList = () => {
  const { engineerName, fetchEngineer } = useEngineerStore(); //이름배열  가져오면 여기에 저장
  const [nameList, setNameList] = useState<boolean[]>(Array(engineerName.length).fill(false)); // 상태관리
  const isAnyChecked = nameList.some((isCheckd) => isCheckd); //리스트에 하나만 체크되게끔
  const [selectedName, setSelectedName] = useState<string>(''); //선택한 체크박스

  //전역으로 만든 함수를 실행시켜준다.
  useEffect(() => {
    fetchEngineer();
  }, [fetchEngineer]);

  //useEngineerStore이 먼저 실행되고 나서야 lenght를 구할수있으니 조건문으로 순서를 늦춰준다.
  useEffect(() => {
    if (engineerName.length > 0) {
      setNameList(new Array(engineerName.length).fill(false));
    }
  }, [engineerName]);

  //로컬에 담는용도
  useEffect(() => {
    //로컬에 선택한이름 넣기
    //if()
    localStorage.setItem('name', selectedName);
  }, [selectedName]);

  //체크박스 상태관리 함수
  const toggle = (index: number, name: string) => {
    console.log({ index, name });

    setNameList((prev) => {
      setSelectedName(name); //선택한 이름을 상태관리 최신화
      const newState = [...prev]; //최신화값을 newState에 넣어준다.

      newState[index] = !newState[index]; // boolean 반전시켜준다.

      if (!newState[index]) {
        //만약 선택한 이름이  거짓이라면 즉 체크박스 체크 안되어있으면
        setSelectedName(''); // 선택한 이름을 공백으로 지정
      } else {
        setSelectedName(name); // 체크 되어있으면 선택한 이름으로 설정
      }

      console.log('nameList :', nameList);

      console.log(name, newState[index]);
      return newState;
    });
  };

  //이름 리스트 뿌려주기
  const EngineerNames = () => {
    return engineerName.map((name, index) => (
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
