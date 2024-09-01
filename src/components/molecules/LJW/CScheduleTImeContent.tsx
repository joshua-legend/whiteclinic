import { Box, Typography } from '@mui/material';

//timeslot 하나 컴포넌트 - atom 분류 가능할듯
type CScheduleTimeContentProps = {
  content: string;
};
const CScheduleTimeContent = ({ content }: CScheduleTimeContentProps) => {
  return (
    <Box sx={{ width: '100px', height: '30px', padding: '3px', textAlign: 'center' }}>
      <Typography variant="subtitle1" component="span">
        {content}
      </Typography>
    </Box>
  );
};

export default CScheduleTimeContent;
