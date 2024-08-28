import { CButtonProps } from '@/constants/definition';
import { Button } from '@mui/material';

const CButton = ({
  content,
  fontSize = 'medium',
  fontWeight = 'bold',
  color,
  type = 'button',
  onClick,
}: CButtonProps) => {
  return (
    <Button
      sx={{ width: '200px', height: '50px', fontSize, color, fontWeight }}
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {content}
    </Button>
  );
};
export default CButton;
