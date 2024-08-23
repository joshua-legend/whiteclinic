import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import SidebarMenuLists from '../components/organism/sidebar/SidebarMenuLists';
import { sizes } from '@/styles/sizes';
import { colors } from '@/styles/colors';

import LogoLink from '../components/molecules/sidebar/LogoLink';

const drawerWidth = sizes.width.sideBar;

const SideNav = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: colors.background.drawer,
          color: colors.text.drawer,
          height: sizes.height.sideBar,
          overflowX: 'hidden',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <LogoLink />

      <SidebarMenuLists />
      {/* <NavLinks /> */}
    </Drawer>
  );
};
export default SideNav;
