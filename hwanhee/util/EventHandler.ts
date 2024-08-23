import { usePageState } from "./UseState";

export const usePageHandlers = (state: ReturnType<typeof usePageState>) => {
    const handleChange = (value: string) => {
      state.setTextValue(value);
      console.log('Text input:', value);
    };
  
    const handleDropChange = (value: string) => {
      state.setDropValue(value);
      console.log('Dropdown selection:', value);
    };
  
    const handleCheckChange = (id: string, checked: boolean) => {
      state.setCheckedItems(checked);
      state.setCheckedItemsValue(id);
      console.log(`체크박스 ${id}: ${checked ? '체크됨' : '체크 해제됨'}`);
    };
  
    const handleOpen = () => state.setOpen(true);
    const handleClose = () => state.setOpen(false);
  
    const handleConfirmModal = () => {
      console.log('Modal confirmed');
      handleClose();
    };
  
    const handleConfirmation = () => {
      const message = `
        텍스트 입력: ${state.textValue}
        드롭다운 선택: ${state.dropValue}
        체크된 항목: ${state.checkedItems ? state.checkedItemsValue : '없음'}
      `;
      console.log('확인 버튼 클릭. 입력값:', message);
      state.setConfirmationMessage(message);
      handleOpen();
    };
  
    return {
      handleChange,
      handleDropChange,
      handleCheckChange,
      handleOpen,
      handleClose,
      handleConfirmModal,
      handleConfirmation,
    };
  };