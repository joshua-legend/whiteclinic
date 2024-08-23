import { colors } from '@/styles/colors';
import { sizes } from '@/styles/sizes';
import { ButtonProps } from '@/util/type/atom';
import MuiButton from '@mui/material/Button';

const Button = ({
  text,
  backgroundColor = 'buttonO',
  color = 'white',
  size = 'large',
  onClick,
}: ButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: colors.background[backgroundColor],
        color: colors.text[color],
        width: sizes.width[size],
        '&.MuiButtonBase-root:hover': {
          bgcolor: colors.background[backgroundColor], // MUI의 기본 hover 효과 무효화
        },
      }}
      onClick={onClick}
      disableRipple
      disableElevation
    >
      {text}
    </MuiButton>
  );
};

export default Button;
