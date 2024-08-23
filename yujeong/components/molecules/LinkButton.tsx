import { LinkButtonProps } from '@/util/type/molecules';
import { ListItemButton } from '@mui/material';
import Link from 'next/link';
import Label from '../atom/Label';
import Icon from '../atom/Icon';

const LinkButton = ({ href, iconprops, labelprops }: LinkButtonProps) => {
  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <ListItemButton>
        <Icon {...iconprops} />
        <Label {...labelprops} />
      </ListItemButton>
    </Link>
  );
};

export default LinkButton;
