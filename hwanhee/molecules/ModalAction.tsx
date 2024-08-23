import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ModalActionProps } from '@/util/type/ModalType';

const ModalAction= ({ confirmText, onConfirm }:ModalActionProps) => (
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={onConfirm} variant="contained">
        {confirmText}
      </Button>
    </Box>
  );

export default ModalAction;