import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { Box } from '@mui/material';
import { useState } from 'react';

type leftinfo = '연락처' | '거주지' | '가능품목' | '특이사항';
const leftinfo: leftinfo[] = ['연락처', '거주지', '가능품목', '특이사항'];

//배열로 상태를 담아줄 그릇생성
export const LeftInfoComponent = () => {
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {leftinfo.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            width: '550px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '380px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 5,
                width: '120px',
                textAlign: 'center',
              }}
            >
              {item}
            </Box>
            <CInput
              containerWidth="300px"
              isReadOnly
              key={index}
              handleInput={(e) => {
                LeftInputStateChangeHandler(index, e.target.value);
              }}
            />
          </Box>
        </Box>
      ))}
      <CButton
        content="급여사항확인"
        fontSize="large"
        handleClick={() => (window.location.href = '/engineer/e_salary')}
      />
    </Box>
  );
};
