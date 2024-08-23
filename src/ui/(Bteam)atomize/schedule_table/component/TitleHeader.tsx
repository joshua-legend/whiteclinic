import { Box, Typography } from '@mui/material';
import { TitleHeaderProps } from '../ts/customerType';

//기사 이름 titleBox 컴포넌트
const TitleHeader = ({ content }: TitleHeaderProps) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#66b2ff' : '#007fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? '#1C2025' : '#fff'),
        borderRadius: '8px',
        textAlign: 'center',
        width: '1000px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="namebox" noWrap>
        {content} 기사
      </Typography>
    </Box>
  );
};

export default TitleHeader;
