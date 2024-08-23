"use client";

import { colors } from "../styles/colors";
import { sideBarMenuData } from "../constants/sideBarMenudata";
import TitleMenuBox from "../conponents/molecules/TitleMenuBox";
import LinkButton from "../conponents/molecules/LinkButton";

const NavLinks = () => {
  return (
    <>
      {sideBarMenuData.map((menuItem) => (
        <div key={menuItem.title}>
          <TitleMenuBox
            iconprops={{ icon: <menuItem.icon />, color: colors.text.title }}
            labelprops={{ text: menuItem.title, color: colors.text.title }}
          />
          {menuItem.links.map((link) => (
            <LinkButton
              href={link.href}
              iconprops={{ icon: <link.icon />, color: colors.text.drawer }}
              labelprops={{ color: colors.text.drawer, text: link.name }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
