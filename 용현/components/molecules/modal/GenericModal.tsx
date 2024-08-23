// import { useState } from 'react';

// import { Box, Modal } from '@mui/material';
// import { Messages } from '@/app/constants/Messages';
// import GenericButtonGroup, { ButtonGroupProps } from '../button/GenericButtonGroup';
// import GenericButton from '../../atom/button/GenericButton';

// const style = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 800,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export type GenericModalProps = {
//   btnInfo: ButtonGroupProps;
//   alert: keyof typeof Messages.Alert;
// };

// const GenericModal = ({ btnInfo, alert }: GenericModalProps) => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <GenericButton text="Regi" onClick={handleOpen} color="white" backgroundColor="buttonYes" />
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {Messages.Alert[alert]}
//           <Box>
//             <GenericButtonGroup {...btnInfo} onChange={handleClose} />
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default GenericModal;
