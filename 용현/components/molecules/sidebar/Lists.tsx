import { Divider } from '@mui/material';
import LinkBtn, { LinkBtnProps } from './LinkBtn';
import ListTitle, { ListTitleProps } from './ListTitle';


export type MenuSection = {
  title: ListTitleProps;
  items: LinkBtnProps[];
};

export type listsProps = {
  sections: MenuSection[];
};

const Lists = ({ sections }: listsProps) => {
 


  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <ListTitle {...section.title} />
          {section.items.map((item, itemIndex) => (
            <LinkBtn key={itemIndex} {...item}   />
          ))}
          <Divider />
        </div>
      ))}
    </>
  );
};

export default Lists;
