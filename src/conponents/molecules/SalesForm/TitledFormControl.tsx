import { Box } from '@mui/material';
import FormField, { FormFieldProps } from './FormField';
import AText, { TextProps } from '@/conponents/atom/Text/AText';

export type TitledFormControlProps = {
  titleprops?: TextProps;
  formfieldprops?: FormFieldProps;
};

const TitledFormControl = ({ titleprops, formfieldprops }: TitledFormControlProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '110px auto',
        width: '100%',
        borderBottom: '1px solid black',
      }}
    >
      <Box
        sx={{
          height: '57px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F2F2F2',
          borderRight: '1px solid black',
        }}
      >
        {titleprops && <AText {...titleprops} />}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', paddingX: '15px' }}>
        {formfieldprops && <FormField {...formfieldprops} />}
      </Box>
    </Box>
  );
};

export default TitledFormControl;
