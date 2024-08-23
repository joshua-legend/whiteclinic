import Link from 'next/link';

import Label, { LabelProps } from '../../atom/label/Label';
import { ListItemButton } from '@mui/material';
import Icons, { IconsProps } from '../../atom/icons/Icons';

export type LinkBtnProps = {
  href: string;
  labelprops: LabelProps;
  iconprops: IconsProps;
};

const LinkBtn = ({ href, labelprops, iconprops }: LinkBtnProps) => {
  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <ListItemButton>
        <Icons {...iconprops} />
        <Label {...labelprops} />
      </ListItemButton>
    </Link>
  );
};

export default LinkBtn;
