import CCheckbox from '@/components/atom/CCheckbox';
import { engineerName } from '@/constants/definition';
import { Box } from '@mui/material';

const PersonName = [
  '강민석',
  '김민석',
  '강강민석',
  '강민',
  '강강강',
  '강민민',
  '민민민',
  '석석석',
  '김김김',
  '강강강',
  'ㅇㅇㅇ',
];

export const NameCheckboxs = () => (
  <Box
    sx={{
      display: 'flex',
      scrollbarWidth:'hidden',
      backgroundColor: 'gray',
      width: 'fit-content',
      borderRadius: '10px',
    }}
  >
    {PersonName.map((name) => (
      <CCheckbox<engineerName> key={name} label={name} isChecked={false} />
    ))}
  </Box>
);
