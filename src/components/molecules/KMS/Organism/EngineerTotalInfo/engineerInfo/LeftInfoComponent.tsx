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

export const LeftInfoComponent = () => {
  //배열로 상태를 담아줄 그릇생성
  const [inputState, setInputState] = useState<string[]>(Array(4).fill(''));

  //인풋 상태관리 함수 매개변수로 index, value값 받음
  const LeftInputStateChangeHandler = (index: number, value: string) => {
    setInputState((prev) => {
      const newState = [...prev];
      newState[index] = value;
      console.log(inputState);
      return newState;
    });
  };

  const handelSetData = () => {
    localStorage.setItem('inputData', JSON.stringify(inputState));
  };

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
              // isReadOnly
              key={index}
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
