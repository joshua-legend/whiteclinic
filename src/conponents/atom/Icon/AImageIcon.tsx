import Image from 'next/image';
import Link from 'next/link';

export type AImageIconProps = {
  href: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};
const AImageIcon = ({ href, src, width, height, alt }: AImageIconProps) => {
  return (
    <>
      <Link href={href}>
        <Image src={src} width={width} height={height} alt={alt}></Image>
      </Link>
    </>
  );
};

export default AImageIcon;
