import React from 'react';
import Typography from '@mui/material/Typography';
import { ModalTitelProps } from '@/util/type/ModalType';

const ModalTitle = ({ title }:ModalTitelProps) => (
  <>
    <Typography id="modal-title" variant="h6" component="h2">
      {title}
    </Typography>
   
  </>
);

export default ModalTitle;