import { Button } from '@mui/material';

type cancleBtnTexts = '등록' | '추가등록' | '급여사항확인';
type btnType = 'button' | 'reset' | 'submit';

type cancleBtnProps = {
  handleCancle?: () => void;
  btnText?: cancleBtnTexts;
  btnType?: btnType;
};

const CancleButton = ({ handleCancle, btnText, btnType }: cancleBtnProps) => {
  return (
    <Button type={btnType} sx={{ width: '200px' }} variant="contained" onClick={handleCancle}>
      {btnText}
    </Button>
  );
};

export default CancleButton;
