import { sizes } from "../styles/sizes";

export type LabelProps = {
  text?: string;
  color?: string;
  fontSize?: keyof typeof sizes.fontSize;
  sx?: object;
};
