import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { SalaryCheckLeft } from './SalaryCheckLeft';
import { SalaryCheckRight } from './SalaryCheckRight';

export const SalaryTotalCheck = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '700px',
        gap: '20px',
      }}
    >
      <SalaryCheckLeft />
      <SalaryCheckRight />
      <CButton content="수정완료" />
    </Box>
  );
};
