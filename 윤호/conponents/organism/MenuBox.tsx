import LinkButton from "../molecules/LinkButton";
import { colors } from "@/app/styles/colors";
import TitleMenuBox from "../molecules/TitleMenuBox";
import { sideBarMenuData } from "@/app/constants/sideBarMenudata";

const MenuBox = () => {
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

export default MenuBox;
