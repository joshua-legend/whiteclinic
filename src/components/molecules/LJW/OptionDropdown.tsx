import CDropDown from '@/components/atom/CDropdown';
import { DropDownBarProps } from '@/constants/definition';
import { SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';

//옵션 이름 + dropdown으로 이루어진 컴포넌트

//CDropdown 타입에 문제 발생. dropdownprops를 ()=>void가 아닌 (event:SelectChangeEvent)=>void 형식으로 변경해야될 것 같음.
//혹은 handleSelect 함수 내에서 const selectedValue = (event.target as HTMLInputElement).value; 식으로 직접 데이터 전달하는 형식으로 진행.
//의견 구하기

type OptionDropdownProps = {
  optionTitle: string;
  dropdownprops: DropDownBarProps;
};

const OptionDropdown = ({ optionTitle, dropdownprops }: OptionDropdownProps) => {
  const [isSelected, setIsSelected] = useState<string>('');
  //   const handleSelect = (event: SelectChangeEvent) => {
  //     setIsSelected(event.target.value);
  //   };

  //추천하지 않는 방식. 추후 삭제
  const handleSelect = () => {
    const selectValue = (event?.target as HTMLInputElement).value;
    setIsSelected(selectValue);
  };
  return (
    <div className="flex gap-1 p-1">
      <div>
        <Typography variant="subtitle2">{optionTitle}</Typography>
      </div>
      <CDropDown {...dropdownprops} selectedValue={isSelected} handleChange={handleSelect} />
    </div>
  );
};

export default OptionDropdown;
