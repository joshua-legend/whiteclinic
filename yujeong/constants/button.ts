import { handleCancel, handleRegister } from "@/util/event/handler";
import { ButtonProps } from "@/util/type/atom";


// 등록, 취소 버튼
export const buttonData: ButtonProps[] = [
    { text: '등록중지', backgroundColor: 'buttonX', color: 'black', size: 'large', onClick: handleCancel },
    { text: '추가등록', backgroundColor: 'buttonO', color: 'white', size: 'large', onClick: handleRegister },
];