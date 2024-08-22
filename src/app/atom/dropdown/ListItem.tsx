import { MenuItem } from '@mui/material';

export type ListItemProps = {
  value: string | number;
};

const ListItem = ({ value = 'default value' }: ListItemProps) => {
  return <MenuItem value={value}>{value}</MenuItem>;
};

export default ListItem;
