import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import AText from '@/conponents/atom/Text/AText';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import ADaySelector from '@/conponents/molecules/Select/ADaySelector';
import APercent from '@/conponents/molecules/Select/APercent';

import { Box } from '@mui/material';

const Page = () => {
  return (
    <>
      <Box
        sx={{
          height: 'calc(100vh - 112px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                  borderBottom: '1px solid #7F7F7F',
                }}
              >
                <AText text="기사 성함" />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  borderBottom: '1px solid #7F7F7F',
                  width: '392px',
                }}
              >
                <AVariableModifyInputBox placeholder="직접수정" isInvisible={false} />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                  borderBottom: '1px solid #7F7F7F',
                }}
              >
                <AText text="수당률" />
              </Box>
              <Box
                sx={{
                  width: '392px',
                  height: 56,
                  display: 'flex',
                  borderBottom: '1px solid #7F7F7F',
                  p: 1,
                }}
              >
                <APercent />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                  // borderBottom: "1px solid #7F7F7F",
                }}
              >
                <AText text="급여요일" />
              </Box>
              <Box
                sx={{
                  width: '392px',
                  height: 56,
                  display: 'flex',
                  // borderBottom: "1px solid #7F7F7F",
                  p: 1,
                  gap: 1,
                }}
              >
                <ADaySelector />
              </Box>
            </Box>
            <Box
              sx={{
                width: '502px',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ACustomButton
                text="취소"
                color="default"
                variant="contained"
                sx={{ width: '100%' }}
              />
              <ACustomButton
                text="등록"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
