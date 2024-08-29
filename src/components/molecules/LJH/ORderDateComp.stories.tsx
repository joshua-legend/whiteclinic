import { Meta } from '@storybook/react';
import OrderDateComp from './OrderDateComp';

const meta = {
  title: 'molecules/tableComponent',
  component: OrderDateComp,
  argTypes: {},
  args: {},
} satisfies Meta<typeof OrderDateComp>;

export default meta;

export const Primary = {
  args: {},
};
