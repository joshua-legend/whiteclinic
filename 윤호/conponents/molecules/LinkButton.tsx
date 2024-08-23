import { Box, ListItemButton } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { colors } from "@/app/styles/colors";
import { LinkButtonProps } from "@/app/util/linkButtonType";
import Icon from "../atom/Icon";
import Label from "../atom/Label";

const LinkButton = ({ iconprops, labelprops, href }: LinkButtonProps) => {
  const pathname = usePathname();
  const hoverColor = {
    ":hover": { color: colors.text.active },
  };

  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <ListItemButton
        sx={{
          color: pathname === href ? colors.text.active : colors.text.inActive,
          ":hover": {
            "& .MuiListItemIcon-root, & .MuiListItemText-root": {
              color: colors.text.active,
            },
          },
        }}
      >
        <Icon
          {...iconprops}
          sx={{
            ...hoverColor,
            color:
              pathname === href ? colors.text.active : colors.text.inActive,
          }}
        />
        <Label
          {...labelprops}
          sx={{
            ...hoverColor,
            color:
              pathname === href ? colors.text.active : colors.text.inActive,
          }}
        />
      </ListItemButton>
    </Link>
  );
};

export default LinkButton;
