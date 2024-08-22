import { Box } from '@mui/material';

type TableBoxProps = {
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  children: React.ReactNode;
  backgroundColor?: string;
};
const TableBox = ({
  backgroundColor,
  color,
  fontSize,
  borderRadius,
  textAlign,
  width,
  height,
  alignItems,
  justifyContent,
  children,
}: TableBoxProps) => {
  return <Box>{children}</Box>;
};
