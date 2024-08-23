import { Box, Typography } from '@mui/material';
import { CheckboxCategory, CheckboxData } from './MyCheckBoxData';
import { MyCheckBox } from './MyCheckBox';
import { labels } from '@/ui/(Bteam)atomize/checkbox/CheckboxInput';

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
          label={item.label}
          isChecked={{ isChecked: item.isChecked }}
        />
      ))}
    </Box>
  );
};

export default MyCheckBoxList;
