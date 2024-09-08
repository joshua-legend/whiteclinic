import { Box } from '@mui/material';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import AText, { TextProps } from '@/conponents/atom/Text/AText';

export type ModalContentProps = {
  textprops?: TextProps;
  buttongroupprops?: ButtonGroupProps;
};

const ModalContent = ({ textprops, buttongroupprops }: ModalContentProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: '20px' }}
      >
        <AText {...textprops} />
      </Box>
      <Box sx={{ display: 'flex', width: '100%' }}>
        {buttongroupprops && <ButtonGroup {...buttongroupprops} />}
      </Box>
    </Box>
  );
};

export default ModalContent;
