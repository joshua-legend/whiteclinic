import { Container } from '@mui/material';
import { NameCheckboxs } from '../../Melecules/engineerInfo/CheckboxList';

export const EngineerInfo = () => {
  return (
    <Container sx={{ width: '1000px', height: '1000px', border: '1px solid black' }}>
      <NameCheckboxs />
    </Container>
  );
};
