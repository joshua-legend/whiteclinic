import { Box, Typography } from '@mui/material';
import { CheckboxCategory, CheckboxData } from './MyCheckBoxData';
import { MyCheckBox } from './MyCheckBox';

type MyCheckBoxListProps = {
  category: CheckboxCategory;
};

const MyCheckBoxList = ({ category }: MyCheckBoxListProps) => {
  const filterCheckBox = CheckboxData.filter((item) => item.category === category);
  return (
    <Box>
      <Typography>{category}</Typography>
      {filterCheckBox.map((item, index) => (
        <MyCheckBox
          key={`${category}-${index}`}
          label={{ text: item.label }}
          isChecked={{ checked: item.isChecked }}
        />
      ))}
    </Box>
  );
};

export default MyCheckBoxList;
