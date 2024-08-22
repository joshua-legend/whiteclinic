import * as React from 'react';
import MyCard from './EngineerScheduleCard';
import { EngineerScheduleList } from './EngineerScheduleList';

const CardPage = () => {
  return (
    <div>
      <EngineerScheduleList selectedDate={'2024-08-07'} />
    </div>
  );
};

export default CardPage;
