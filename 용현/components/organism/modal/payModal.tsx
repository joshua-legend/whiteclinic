// import { useState } from 'react';
// import GenericModal, { GenericModalProps } from '../../molecules/modal/GenericModal';

// const PayModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = () => setIsOpen(false);
//   const handleRegister = () => {
//     console.log('급여 등록 ');
//     handleClose();
//   };

//   const handleCancel = () => {
//     console.log('급여 등록 취소');
//     handleClose();
//   };

//   const modalProps: GenericModalProps = {
//     alert: 'Wash',
//     btnInfo: {
//       pri_property: {
//         text: 'PayCheck',
//         color: 'white',
//         backgroundColor: 'buttonYes',
//         onClick: handleRegister,
//       },
//       sec_property: {
//         text: 'No',
//         color: 'white',
//         backgroundColor: 'buttonNo',
//         onClick: handleCancel,
//       },
//     },
//   };

//   return <GenericModal {...modalProps} />;
// };

// export default PayModal;
