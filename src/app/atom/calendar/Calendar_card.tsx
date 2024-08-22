'use client';

import React from 'react';
import { EngineerScheduleList } from '../card/EngineerScheduleList';
import Calendar from './Calendar';

const Calendar_card = () => {
  const [selectDate, setSelectDate] = React.useState<string>('');

  return (
    <div>
      <Calendar onDateSelect={setSelectDate}></Calendar>
      <EngineerScheduleList selectedDate={selectDate} />
    </div>
  );
};

export default Calendar_card;
