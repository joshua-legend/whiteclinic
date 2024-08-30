'use client';

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { DrawerMuiStyle, DrawerToolbarMuiStyle } from '@/styles/mui';
import { logoData } from '@/constants/logoData';
import AImageIcon from '@/conponents/atom/Icon/AImageIcon';
import ASideMenuBox from '@/conponents/organism/Menu/ASideMenuBox';

const SideNav = () => {
  return (
    <Drawer sx={{ ...DrawerMuiStyle }} variant="permanent" anchor="left">
      <Toolbar
        sx={{
          ...DrawerToolbarMuiStyle,
        }}
      >
        <AImageIcon {...logoData} />
      </Toolbar>
      <List>
        <ASideMenuBox />
      </List>
    </Drawer>
  );
};

export default SideNav;
