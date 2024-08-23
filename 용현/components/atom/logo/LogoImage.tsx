import { sizes } from '@/styles/sizes';
import Image from 'next/image';

type LogoImageProps = {
  src: string;
  width?: keyof typeof sizes.width;
  height?: keyof typeof sizes.height;
  alt: string;
};

const LogoImage = ({ src, width, height, alt }: LogoImageProps) => {
  return <Image src={src} width={sizes.width.logo} height={sizes.height.logo} alt={alt}></Image>;
};

export default LogoImage;
