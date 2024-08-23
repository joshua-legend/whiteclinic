import { ImageIconProps } from "@/app/util/imageIconType";
import Image from "next/image";
import Link from "next/link";

const ImageIcon = ({ href, src, width, height, alt }: ImageIconProps) => {
  return (
    <>
      <Link href={href}>
        <Image src={src} width={width} height={height} alt={alt}></Image>
      </Link>
    </>
  );
};

export default ImageIcon;
