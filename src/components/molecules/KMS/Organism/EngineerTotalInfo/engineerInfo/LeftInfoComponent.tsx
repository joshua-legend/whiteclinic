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
  const [selectedId, setSelectedId] = useState<number | null>(null); //이전의 값을 담고있다.

  //전역에서 가져오는함수
  useEffect(() => {
    fetchEngineer();
  }, [fetchEngineer]);

  //로컬에서 선택된 이름 가져오는 함수 0.5초마다갱신
  useEffect(() => {
    const checkLocalStorage = () => {
      const selectedEngineerId = localStorage.getItem('id');
      //만약 로컬에 선택한 기사의 id가 있고 기존의 담아놓은 id와 다르다면

      if (selectedId === null) {
        setSelectedId(null);
        setInputState(Array(6).fill(''));
      }
      if (selectedEngineerId && parseInt(selectedEngineerId) != selectedId) {
        //상태관리 최신화
        setSelectedId(parseInt(selectedEngineerId));
      }
    };

    checkLocalStorage();

    const intervalid = setInterval(checkLocalStorage, 50);
    return () => clearInterval(intervalid);
  }, [selectedId]);

  //선택된 기사의 이름과 일치하는 정보가져오기
  useEffect(() => {
    const selectedEngineer = engineers.find(
      (engineerData) => engineerData.engineerId === selectedId
    );

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
  }, [selectedId, engineers]);

  //인풋 상태관리 함수 매개변수로 index, value값 받음
  const LeftInputStateChangeHandler = (index: number, value: string) => {
    setInputState((prev) => {
      const newState = [...prev];
      newState[index] = value;
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
              value={inputState[index] || ''}
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
