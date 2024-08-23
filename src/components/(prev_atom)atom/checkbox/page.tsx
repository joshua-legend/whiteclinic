import React from 'react';
import MyCheckBoxList from './MyCheckBoxList';
import { CheckboxCategory } from './MyCheckBoxData';

const CardPage = () => {
  return (
    <div>
      <MyCheckBoxList category={CheckboxCategory.Skill} />
    </div>
  );
};

export default CardPage;
