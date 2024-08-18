import React, { ChangeEvent, useState } from 'react';
import { InputProps } from './input';

// 여러종류의 양식검증을 위한 다용도 인풋 컴포넌트
export const MultiPurposeInput: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<string | number | undefined>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const renderInputField = () => {
    if ('name' in props && 'contact' in props && 'address' in props) {
      return (
        <>
          <input type="text" placeholder="성함" onChange={handleChange} />
          <input type="text" placeholder="연락처" onChange={handleChange} />
          <input type="text" placeholder="주소" onChange={handleChange} />
        </>
      );
    } else if ('ps' in props) {
      return (
        <textarea
          className="resize-none w-8"
          placeholder="특이사항을 입력해주세요"
          onChange={handleChange}
        />
      );
    } else if ('discount' in props) {
      return <input type="text" placeholder="할인율을 입력해주세요" onChange={handleChange} />;
    } else if ('thisYear' in props) {
      return <input type="text" placeholder="연도를 입력해주세요" onChange={handleChange} />;
    } else if ('modelEA' in props) {
      return <input type="text" placeholder="수량을 입력해주세요" onChange={handleChange} />;
    } else if ('CalFn' in props) {
      return <input onChange={props.CalFn} placeholder="계산된 값 출력"></input>;
    }
    return null;
  };

  return <div>{renderInputField()}</div>;
};
