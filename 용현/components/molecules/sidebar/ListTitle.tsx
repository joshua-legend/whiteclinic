import { ListItem } from '@mui/material';
import Icons, { IconsProps } from '../../atom/icons/Icons';
import Label, { LabelProps } from '../../atom/label/Label';

export type ListTitleProps = {
  iconProps: IconsProps;
  labelProps: LabelProps;
};

const ListTitle = ({ labelProps, iconProps }: ListTitleProps) => {
  return (
    <ListItem>
      <Icons {...iconProps} color="secondary" fontSize="s" />
      <Label {...labelProps} color="secondary" fontSize="s" />
    </ListItem>
  );
};

export default ListTitle;
