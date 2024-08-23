import { sizes } from "../styles/sizes";

export type InputBoxProps = {
  text?: string;
  size?: "small" | "medium";
  sx?: object;
  fontSize?: keyof typeof sizes.fontSize;
};
