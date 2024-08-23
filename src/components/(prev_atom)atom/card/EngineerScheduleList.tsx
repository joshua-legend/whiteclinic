import { Schedule } from '@mui/icons-material';

import EngineerScheduleCard, { EngineerScheduleCardProps } from './EngineerScheduleCard';
import { CardData } from './CardData';
import { cardStyle } from '@/styles/sizes';

type EngineerScheduleListProps = {
  selectedDate: string;
};

export const EngineerScheduleList = ({ selectedDate }: EngineerScheduleListProps) => {
  const filteredScheduleList = CardData.filter((schedule) => schedule.date === selectedDate);

  console.log('List:', filteredScheduleList);

  return (
    <div>
      {filteredScheduleList.map((list, lindex) =>
        list.engineersName.map((names, nindex) => {
          return (
            <EngineerScheduleCard
              key={`${lindex}-${nindex}`}
              CardDataProps={{ date: list.date, engineersName: [names] }}
              cardSize="medium"
              imgSize="medium"
              nameSize="medium"
            />
          );
        })
      )}
    </div>
  );
};
