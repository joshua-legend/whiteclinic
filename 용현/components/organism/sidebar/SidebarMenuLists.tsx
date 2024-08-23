import { createElement } from 'react';
import { SidebarMenuItems } from '@/app/constants/SidebarMenuItems';
import Lists, { listsProps, MenuSection } from '../../molecules/sidebar/Lists';


const SidebarMenuLists = () => {
  //메뉴 아이템 배열 Map함수
  const sections: MenuSection[] = SidebarMenuItems.map((item) => ({
    title: {
      iconProps: {
        icon: createElement(item.ListMenuTitle.icon),
      },
      labelProps: {
        text: item.ListMenuTitle.title,
      },
    },
    items: item.ListMenuItems.links.map((link) => ({
      href: link.href,
      iconprops: {
        icon: createElement(link.icon),
      },
      labelprops: {
        text: link.name,
      },
    })),
  }));

  const listsProps: listsProps = { sections };

  return <Lists {...listsProps} />;
};

export default SidebarMenuLists;
