import { MenuItem } from '@mui/material';

type ListItemProps = {
  index?: number;
  value: string | number;
};

const ListItem = ({ index = 0, value = 'default value' }: ListItemProps) => {
  return (
    <MenuItem key={index} value={value}>
      {value}
    </MenuItem>
  );
};

export default ListItem;
