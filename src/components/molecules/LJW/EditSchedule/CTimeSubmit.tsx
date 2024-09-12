import { Stack } from '@mui/material';
import CTimeSelect, { CtimeSelectProps } from './CTImeSelect';
import CEditButton from './CEditButton';

type CTImeSubmitProps = {
  timeprops: CtimeSelectProps;
  handleClick: () => void;
};
const CTimeSubmit = ({ timeprops, handleClick }: CTImeSubmitProps) => {
  return (
    <Stack>
      <CTimeSelect {...timeprops} />
      <CEditButton handleClick={handleClick} />
    </Stack>
  );
};

export default CTimeSubmit;
