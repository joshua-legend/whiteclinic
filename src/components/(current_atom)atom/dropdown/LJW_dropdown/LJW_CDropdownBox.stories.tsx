import { StoryFn } from '@storybook/react';
import LJW_CDropdownBox, { LJW_CDropdownBoxProps } from './LJW_CDropdownBox';
import { SelectChangeEvent } from '@mui/material';
import { CleaningItem } from '@/ui/(Bteam)atomize/dropdown/DropDownList';

const meta = {
  title: 'components/dropdowns/LJW_Cdropdown',
  component: LJW_CDropdownBox,
  argTypes: {},
};

export default meta;
export const Primary = {
  args: {},
};

const Template: StoryFn<LJW_CDropdownBoxProps> = (args) => <LJW_CDropdownBox {...args} />;

export const CleaningItems = Template.bind({});
CleaningItems.args = {
  dropSelectProps: {
    labelId: 'cleaning-items',
    labelContent: '세척 품목',
    selectValue: '',
    handleChange: (event: SelectChangeEvent) => console.log(event.target.value),
  },
  dropItems: CleaningItem,
};
