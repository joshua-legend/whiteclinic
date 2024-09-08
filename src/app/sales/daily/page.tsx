'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import TwoButtons from '@/conponents/organism/Order/TwoButtons';
import OrderForm from '@/conponents/organism/Order/OrderForm';

const containerStyle = {
  height: 'calc(100vh - 112px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const innerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Page = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={innerContainerStyle}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <OrderForm />
          <TwoButtons />
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
