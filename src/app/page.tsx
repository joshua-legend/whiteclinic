'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AVariableModifyInputBox from '@/conponents/atom/Input/AVariableModifyInputBox';
import AFixedModifyInputBox from '@/conponents/atom/Input/AFixedModifyInputBox';
import TextualControlGroup from '@/conponents/molecules/Text/TextualControlGroup';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ADatesSelector from '@/conponents/organism/Select/ADateSelector';
import AMonthSelector from '@/conponents/organism/Select/AMonthSelector';
import APercent from '@/conponents/organism/Select/APercent';
import ADaySelector from '@/conponents/organism/Select/ADaySelector';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box>
        <Typography>Fixed Input - SingleLine</Typography>
        <AFixedModifyInputBox />
        <AFixedModifyInputBox inputVariant="filled" />
        <AFixedModifyInputBox inputVariant="standard" />
      </Box>
      <Box>
        <Typography>Fixed Input - MultiLine</Typography>
        <AFixedModifyInputBox isMultiline={true} />
        <AFixedModifyInputBox inputVariant="filled" isMultiline={true} />
        <AFixedModifyInputBox inputVariant="standard" isMultiline={true} />
      </Box>
      <Box>
        <Typography>Variable Input - SingleLine</Typography>
        <AVariableModifyInputBox />
        <AVariableModifyInputBox inputVariant="filled" />
        <AVariableModifyInputBox inputVariant="standard" />
      </Box>
      <Box>
        <Typography>Variable Input - MultiLine</Typography>
        <AVariableModifyInputBox isMultiline={true} />
        <AVariableModifyInputBox inputVariant="filled" isMultiline={true} />
        <AVariableModifyInputBox inputVariant="standard" isMultiline={true} />
      </Box>
      <Box>
        <TextualControlGroup component="RCheckbox" textprops={{ text: '건조기' }} />
        <TextualControlGroup
          component="RIcon"
          preveprops={{ icon: <PlaylistAddIcon /> }}
          textprops={{ text: '건조기' }}
        />
        <TextualControlGroup textprops={{ text: '벽걸이' }} />
      </Box>
      <Box>
        <ADatesSelector />
        <ADaySelector />
        <AMonthSelector />
        <APercent />
      </Box>
      <Box>
        <ACustomButton text="확인" variant="text" color="primary" size="small" />
        <ACustomButton text="확인" variant="contained" color="primary" size="medium" />
        <ACustomButton text="확인" variant="outlined" color="primary" size="large" />
      </Box>
    </main>
  );
};

export default Home;
