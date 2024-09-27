import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { leftinfo } from '@/constants/definition';
import {
  LeftInfoComponentStyleOne,
  LeftInfoComponentStyleThree,
  LeftInfoComponentStyleTWo,
} from '@/styles/customize';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useEngineerStore } from '../stoeres/EngineerStore';

export const LeftInfoComponent = () => {
  //배열로 상태를 담아줄 그릇생성
  const [inputState, setInputState] = useState<string[]>(Array(4).fill(''));
  const { engineers, fetchEngineer } = useEngineerStore();
  const [selectedName, setSelectedName] = useState<string | null>(null);

  //전역에서 가져오는함수
  useEffect(() => {
    fetchEngineer();
  }, [fetchEngineer]);

  //로컬에서 선택된 이름 가져오는 함수 1초마다갱신
  useEffect(() => {
    const checkLocalStorage = () => {
      const storedName = localStorage.getItem('name');
      if (storedName !== selectedName) {
        setSelectedName(storedName);
        console.log('선택한 이름 가져옴', storedName);
      }
    };

    checkLocalStorage();

    const intervalid = setInterval(checkLocalStorage, 1000);
    return () => clearInterval(intervalid);
  }, [selectedName]);

  //선택된 기사의 이름과 일치하는 정보가져오기
  useEffect(() => {
    const selectedEngineer = engineers.find((engineerData) => engineerData.name === selectedName);

    if (selectedEngineer) {
      console.log('선택된 기사의 정보:', selectedEngineer);
      setInputState([
        selectedEngineer.phoneNumber || '',
        selectedEngineer.address || '',
        selectedEngineer.AvailableItems || '',
        selectedEngineer.Issue || '',
        '',
        '',
      ]);
    }
  }, [selectedName]);

  //인풋 상태관리 함수 매개변수로 index, value값 받음
  const LeftInputStateChangeHandler = (index: number, value: string) => {
    setInputState((prev) => {
      const newState = [...prev];
      newState[index] = value;
      console.log(inputState);
      return newState;
    });
  };

  //로컬에 input들의 정보를 넣는 함수
  const handelSetData = () => {
    localStorage.setItem('inputData', JSON.stringify(inputState));
  };

  //input의 값이 바뀔때 마다 함수호출
  useEffect(() => {
    handelSetData();
  }, [inputState]);

  return (
    <Box id="leftInfo" sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {leftinfo.map((item, index) => (
        <Box
          key={index}
          sx={{
            ...LeftInfoComponentStyleOne,
          }}
        >
          <Box
            sx={{
              ...LeftInfoComponentStyleTWo,
            }}
          >
            <Box
              sx={{
                ...LeftInfoComponentStyleThree,
              }}
            >
              {item}
            </Box>
            <CInput
              containerWidth="300px"
              isReadOnly
              key={index}
              value={inputState[index]}
              handleInput={(e) => {
                LeftInputStateChangeHandler(index, e.target.value);
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
