import * as React from 'react';

import { NumberInputType } from '@/constants/definition';
import { NumberInput } from './CBaseNumberInput';

export const CNumberInput = ({ handleChange }: NumberInputType) => {
  return <NumberInput min={0} max={99} onChange={handleChange} />;
};
