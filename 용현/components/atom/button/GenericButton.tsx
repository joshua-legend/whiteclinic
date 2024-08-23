import * as React from 'react';
import Button from '@mui/material/Button';

import { Messages } from '@/app/constants/Messages';
import { colors } from '@/styles/colors';

// 버튼 타입정의
export type ButtonProps = {
  onClick?: () => void;
  // onChange?: () => void;
  text: keyof typeof Messages.ButtonText;
  color: keyof typeof colors.text;
  backgroundColor: keyof typeof colors.background;
};

const GenericButton = ({ onClick, /*onChange, */ text, color, backgroundColor }: ButtonProps) => {
  // const handleClick = () => {
  //         옵셔널 체이닝(Optional chaining 연산자 ?.는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.
  //    쉽게 말하자면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
  //    k ?.은 ?.앞의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다.)
  //   onClick?.();
  //   onChange?.();
  // };
  return (
    <Button
      sx={{
        backgroundColor: colors.background[backgroundColor],
        color: colors.text[color],
        fontSize: '20px',
        width: '200px',
        height: '30px',
        borderRadius: '0',
        '&.MuiButtonBase-root:hover': {
          bgcolor: colors.background.drawer, // MUI의 기본 hover 효과 무효화
        },
      }}
      onClick={onClick}
      // onClick={handleClick}
      disableRipple //disableRipple은 버튼 클릭 시 발생하는 잔물결(ripple) 효과를 제거하고
      disableElevation // disableElevation은 버튼 클릭 시 생기는 그림자 효과를 제거합니다
    >
      {Messages.ButtonText[text]}
    </Button>
  );
};

export default GenericButton;
