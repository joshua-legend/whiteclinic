import { buttonStyle, sizes } from '@/styles/sizes';
import { Button } from '@mui/material';

type frameProps = {
  text?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: string;
  btnType?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
};

export const ButtonFrame = ({
  text = '기본값',
  fontSize = 'medium',
  color,
  onClick,
  btnType = 'button',
}: frameProps) => {
  return (
    <Button
      sx={{
        ...buttonStyle.buttonSize,
        fontSize: sizes.fontSize[fontSize],
        color,
        margin: sizes.gap.medium,
      }}
      variant="contained"
      onClick={onClick}
      type={btnType}
    >
      {text}
    </Button>
  );
};

export default ButtonFrame;
