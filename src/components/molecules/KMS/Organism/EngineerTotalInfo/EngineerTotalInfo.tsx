import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { CheckboxList } from '../../Melecules/engineerInfo/CheckboxList';
import { EngineerInfo } from './engineerInfo/EngineerInfo';

export const EngineerTotalInfo = () => {
  return (
    <Box
      sx={{
        width: '1550px',
        minHeight: '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '24px !important',
        margin: '24px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <CheckboxList />
      </Box>

      <EngineerInfo />
    </Box>
  );
};
