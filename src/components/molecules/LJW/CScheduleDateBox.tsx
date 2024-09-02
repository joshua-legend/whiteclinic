import { Box } from '@mui/material';
import CTitleContent from './CTitleContent';
import { TODAY } from '@/constants/definition';
import { Dayjs } from 'dayjs';

//날짜 제목 컴포넌트
//나중에 CEnginnerTitle과 합칠 수 있을지도
type CScheduleDateBoxProps = {
  dateInfo?: Dayjs | null;
};

const CScheduleDateBox = ({ dateInfo = TODAY }: CScheduleDateBoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        color: '#007fff',
        borderRadius: '8px',
        textAlign: 'center',
        width: '1000px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CTitleContent variant="namebox" content={dateInfo} />
    </Box>
  );
};

export default CScheduleDateBox;
