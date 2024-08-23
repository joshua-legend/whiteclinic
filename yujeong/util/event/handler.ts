export const handleCancel = () => {
    console.log('취소 버튼이 클릭되었습니다.');
    // 취소 버튼 클릭 시 동작할 로직
  };
  
  export const handleRegister = () => {
    console.log('등록 버튼이 클릭되었습니다.');
    // 등록 버튼 클릭 시 동작할 로직
  };

// inputHandlers.ts
export const createHandleInputChange = (
  onChange?: (value: string) => void
) => (event: React.ChangeEvent<HTMLInputElement>) => {
  onChange ? onChange(event.target.value) : null;
};

export const handleInputChange = (value: string) => {
  console.log('입력된 값:', value);
};
  