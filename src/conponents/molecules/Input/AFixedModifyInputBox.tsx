'use client';
import * as React from 'react';
import AFFilledInput from '@/conponents/atom/Input/FixedInput/AFFilledInput';
import AFOutLinedInput from '@/conponents/atom/Input/FixedInput/AFOutLinedInput';
import AFStandardInput from '@/conponents/atom/Input/FixedInput/AFStandardInput';

type InputVariantType = 'outlined' | 'standard' | 'filled';

export type AFixedModifyInputBoxProp<T extends string> = {
  type?: string;
  placeholder?: T;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputVariant?: InputVariantType;
};

const AFixedModifyInputBox = <T extends string>({
  type = 'text',
  placeholder,
  isInvisible = true,
  width = 160,
  sx,
  isMultiline = false,
  inputVariant = 'outlined',
}: AFixedModifyInputBoxProp<T>) => {
  // 반복되는 props를 객체로 묶음
  const commonProps = {
    type,
    placeholder,
    isInvisible,
    width,
    sx,
    isMultiline,
  };

  switch (inputVariant) {
    case 'outlined':
      return <AFOutLinedInput {...commonProps} />;
    case 'filled':
      return <AFFilledInput {...commonProps} />;
    case 'standard':
      return <AFStandardInput {...commonProps} />;
    default:
      return null;
  }
};

export default AFixedModifyInputBox;
