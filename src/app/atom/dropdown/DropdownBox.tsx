import { ListItem } from '@mui/material';
import DropDownSelect, { DropDownSelectProps } from './DropDownSelect';
import DropFormControl from './DropFormControl';
import LabelName, { LabelNameProps } from './LabelName';
import { ListItemProps } from './ListItem';

type DropDownBoxProps = {
  labelnameprops: LabelNameProps;
  dropdownselectprops: DropDownSelectProps;
  items: Array<ListItemProps>;
};

const DropdownBox = ({ labelnameprops, dropdownselectprops, items }: DropDownBoxProps) => {
  return (
    <DropFormControl>
      <LabelName {...labelnameprops} />
      <DropDownSelect {...dropdownselectprops}>
        {/* 여기도 나눠야하나 나눠야할거같은데 좀 더 고민해보기 */}
        <ListItem key={-1} value="선택안함" />
        {items.map((item, i) => (
          <ListItem key={i} {...item} />
        ))}
      </DropDownSelect>
    </DropFormControl>
  );
};

export default DropdownBox;
