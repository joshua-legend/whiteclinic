import { ButtonStyle } from '@/styles/ButtonStyle';
import { ACustomButtonProps } from '@/util/ButtonType';
import { Button } from '@mui/material';

const ACustomButton = ({
  variant,
  text,
  onClick,
  color = 'default',
  size = 'medium',
}: ACustomButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        ...ButtonStyle.size[size],
        ...ButtonStyle.color[color],
      }}
    >
      {text}
    </Button>
  );
};

export default ACustomButton;
