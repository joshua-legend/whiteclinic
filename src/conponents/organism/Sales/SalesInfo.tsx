'use client';

import ButtonGroup from '@/conponents/molecules/SalesForm/ButtonGroup';
import SalesModal from '@/conponents/molecules/SalesForm/SalesModal';
import SalesInfoForm from '@/conponents/molecules/SalesForm/SalesInfoForm';
import { salesButtonData, salesModalData } from '@/constants/salesData';
import { salesInfoFormData } from '@/constants/salesInfoFromData';
import { Box } from '@mui/material';
import { useState } from 'react';

const SalesInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRegister = () => {
    console.log("추가 등록 클릭");
    setIsModalOpen(false);
  };

  const modalButtonProps = {
    textprops: salesModalData.textprops,
    buttongroupprops: {
      abuttonprops: salesModalData.abuttonprops.map((modalButton, index) => ({
        ...modalButton,
        onClick: index === 0 ? handleCloseModal : handleRegister,
      })),
    },
  };

  // '등록' 버튼만 모달 열기 설정
  const salesButtonDataWithModal = salesButtonData.map((button) => {
    return button.text === '등록' 
      ? { ...button, onClick: handleOpenModal }
      : button;
  });

  return (
    <Box>
      <SalesInfoForm titledformcontrolprops={salesInfoFormData} />
      <ButtonGroup abuttonprops={salesButtonDataWithModal} />
      <SalesModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        modalcontentprops={modalButtonProps}
      />
    </Box>
  );
};

export default SalesInfo;
