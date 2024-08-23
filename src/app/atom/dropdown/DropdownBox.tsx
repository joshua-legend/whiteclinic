import { ListItem } from '@mui/material';
import DropDownSelect, { DropDownSelectProps } from './DropDownSelect';
import DropFormControl from './DropFormControl';
import LabelName, { LabelNameProps } from './LabelName';
import { ListItemProps } from './ListItem';

//최종 드롭다운 컴포넌트
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
        <ListItem key={-1} value="선택안함" />
        {items.map((item, i) => (
          <ListItem key={i} {...item} />
        ))}
      </DropDownSelect>
    </DropFormControl>
  );
};

export default DropdownBox;
