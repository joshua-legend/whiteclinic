import { Box, Button } from '@mui/material';
import { ButtonProps, CommonButtonProps } from './btn';

const getButtonProps = (props: ButtonProps): CommonButtonProps => {
  if ('submitFn' in props) {
    return { onClick: props.submitFn, text: props.text };
  } else if ('RegisterFn' in props) {
    return { onClick: props.RegisterFn, text: props.text };
  } else if ('ExRegisterFn' in props) {
    return { onClick: props.ExRegisterFn, text: props.text };
  } else if ('salaryCheckFn' in props) {
    return { onClick: props.salaryCheckFn, text: props.text };
  }
  throw new Error('Invalid Button Props');
};

export const MultiPurposeButton: React.FC<ButtonProps> = (props) => {
  const { onClick, text } = getButtonProps(props);

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <Button size="large" variant="contained" onClick={onClick}>
        {text}
      </Button>
    </Box>
  );
};
