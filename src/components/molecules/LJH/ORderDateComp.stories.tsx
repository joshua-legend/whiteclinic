import { Meta } from '@storybook/react';
import OrderDateComp from './OrderDateComp';
import { fn } from '@storybook/test';

const meta = {
  title: 'molecules/tableComponent/dateComp',
  component: OrderDateComp,
  tags: ['autodocs'],
  argTypes: {},
  args: { handleChange: fn() },
} satisfies Meta<typeof OrderDateComp>;

export default meta;

export const Primary = {
  args: {},
};
