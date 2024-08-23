import { IconProps } from "./iconType";
import { LabelProps } from "./labelType";

export type LinkButtonProps = {
  iconprops: IconProps;
  labelprops: LabelProps;
  href: string;
  sx?: object;
};
