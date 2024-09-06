import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { Box } from '@mui/material';

type leftinfo = '연락처' | '거주지' | '가능품목' | '특이사항';
const leftinfo: leftinfo[] = ['연락처', '거주지', '가능품목', '특이사항'];

export const LeftInfoComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {leftinfo.map((item, i) => (
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
              // border: '1px solid green',
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
            <CInput isReadOnly containerWidth="300px" />
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
