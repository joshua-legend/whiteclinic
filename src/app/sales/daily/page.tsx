'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import TwoButtons from '@/conponents/organism/Order/TwoButtons';
import OrderForm from '@/conponents/organism/Order/OrderForm';
import CenterLayout from '@/app/customers/c_list/CenterLayout';

export const columnCentered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle = {
  height: 'calc(100vh - 112px)',
  ...columnCentered,
};

const innerContainerStyle = {
  ...columnCentered,
};

const Page = () => {
  return (
    <CenterLayout
      children={
        <>
          <OrderForm />
          <TwoButtons />
        </>
      }
    />
  );
};

export default Page;
