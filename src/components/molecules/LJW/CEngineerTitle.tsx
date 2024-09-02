import { Box } from '@mui/material';
import CTitleContent, { CTitleContentProps } from './CTitleContent';

//기사 이름 타이틀 컴포넌트
//backgroundcolro, color 따로 빼기.
type CEngineerTitleProps = {
  engineerName: string;
};

const CEngineerTitle = ({ engineerName }: CEngineerTitleProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#007fff',
        color: '#fff',
        borderRadius: '8px',
        textAlign: 'center',
        width: '1000px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CTitleContent variant="namebox" content={engineerName} subContent="기사" />
    </Box>
  );
};
export default CEngineerTitle;
