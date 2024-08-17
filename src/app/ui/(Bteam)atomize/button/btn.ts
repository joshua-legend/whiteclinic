type SubmitBtnType = {
  submitFn: () => void;
  text: '아니오' | '등록';
};

type RegisterBtnType = {
  RegisterFn: () => void;
  text: '취소' | '등록';
};

type ExtraRegisterBtnType = {
  ExRegisterFn: () => void;
  text: '등록중지' | '추가등록';
};

type CheckSalaryBtnType = {
  salaryCheckFn: () => void;
  text: '급여사항 확인';
};

export type CommonButtonProps = {
  onClick: () => void;
  text: string;
};

export type ButtonProps =
  | SubmitBtnType
  | RegisterBtnType
  | ExtraRegisterBtnType
  | CheckSalaryBtnType;
