import AText from '@/conponents/atom/Text/AText';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import { Box } from '@mui/material';

type LabeledTextInputProps = {
  labeltext: string;
  borderBottom?: string;
  borderRight?: string;
};

const LabeledTextInput = ({
  labeltext,
  borderBottom = '1px solid #7F7F7F',
  borderRight = '1px solid #7F7F7F',
}: LabeledTextInputProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: 110,
          height: 57,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F2F2F2',
          borderRight: { borderRight },
          borderBottom: { borderBottom },
        }}
      >
        <AText text={labeltext} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          borderBottom: { borderBottom },
          width: '462px',
        }}
      >
        <AVariableModifyInputBox placeholder="직접수정" isInvisible={false} />
      </Box>
    </Box>
  );
};

export default LabeledTextInput;
