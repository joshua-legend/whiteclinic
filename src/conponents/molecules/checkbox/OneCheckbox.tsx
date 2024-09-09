'use client';

import ACheckbox, { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import { normalWashModalData } from '@/constants/salesData';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import SalesModal from '../SalesForm/SalesModal';

export type CheckboxGroupProps = {
  checkboxes: { [key: string | number]: CheckboxProps };
  onChange?: (selectedKey: string | null) => void;
  value?: string | null;
};

const OneCheckbox = ({ checkboxes, onChange, value }: CheckboxGroupProps) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCheckboxChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxText = checkboxes[key].textprops?.text || 'Unknown';

    if (event.target.checked) {
      console.log(`${checkboxText} 체크됨`);
      if (key === 'normalWash') {
        setIsModalOpen(true);
      }
      setSelectedKey(key);
    } else {
      console.log(`${checkboxText} 해제됨`);
      setSelectedKey(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedKey(null);
  };

  const handleRegister = () => {
    setSelectedKey('normalWash');
    setIsModalOpen(false);
  };

  const modalButtonProps = {
    textprops: normalWashModalData.textprops,
    buttongroupprops: {
      abuttonprops: normalWashModalData.abuttonprops.map((modalButton, index) => ({
        ...modalButton,
        onClick: index === 0 ? handleCloseModal : handleRegister,
      })),
    },
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {Object.entries(checkboxes).map(([key, checkboxProps]) => (
          <ACheckbox
            key={key}
            isCheck={selectedKey === key}
            onChange={handleCheckboxChange(key)}
            textprops={checkboxProps.textprops}
          />
        ))}
      </Box>
      <SalesModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        modalcontentprops={modalButtonProps}
      />
    </>
  );
};

export default OneCheckbox;
