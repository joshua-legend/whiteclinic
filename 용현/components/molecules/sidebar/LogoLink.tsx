import { Toolbar } from '@mui/material';
import Link from 'next/link';
import LogoImage from '../../atom/logo/LogoImage';
import { sizes } from '@/styles/sizes';

const LogoLink = () => {
  return (
    <Toolbar sx={{ paddingY: sizes.padding.xlarge }}>
      <Link  href={'/'}>
        <LogoImage src="/logo.png" alt="logo" />
      </Link>
    </Toolbar>
  );
};

export default LogoLink;
