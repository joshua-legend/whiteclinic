import { Meta } from '@storybook/react';
import OrderInfoTable from './COrderInfoTable';

const meta = {
  title: 'molecules/tableComponent/tableMolecule',
  component: OrderInfoTable,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OrderInfoTable>;

export default meta;
export const Primary = {
  args: {},
};
