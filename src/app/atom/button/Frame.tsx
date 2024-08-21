import { sizes } from '@/styles/sizes';
import { Button } from '@mui/material';

type frameProps = {
  text?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: string;
  onClick?: () => void;
};

const ButtonFrame = ({ text = '기본값', fontSize = 'medium', color, onClick }: frameProps) => {
  return (
    <Button
      sx={{
        ...sizes.buttonSize,
        fontSize: sizes.fontSize[fontSize],
        color,
        margin: sizes.gap.medium,
      }}
      size="large"
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonFrame;
