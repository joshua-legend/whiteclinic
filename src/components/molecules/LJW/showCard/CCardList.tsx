import { Box } from '@mui/material';
import CCardAtom, { CCardAtomProps } from './CCardAtom';
import { engineerInfo } from '@/constants/definition';

type CCardListProps = {
  cardatomprops: CCardAtomProps;
  selectDay: string;
  selectDate: string;
  engineer?: engineerInfo[];
  onEngineerClick: (engineer: engineerInfo) => void;
};
const CCardList = ({
  cardatomprops,
  selectDate,
  selectDay,
  engineer,
  onEngineerClick,
}: CCardListProps) => {
  if (!engineer) {
    return <Box></Box>;
  }

  const filterWorkDay = (engineer: engineerInfo) => {
    const workDays = engineer.engineerWorkDay?.split(',').map((day) => day.trim());
    return workDays?.includes(selectDay);
  };

  // 근무하는 기사 필터링
  const workingEngineers = engineer.filter(
    (engineer) => engineer.engineerClosedDate !== selectDate && filterWorkDay(engineer)
  );

  // 휴무 기사 필터링
  const offDutyEngineers = engineer.filter(
    (engineer) => engineer.engineerClosedDate === selectDate || !filterWorkDay(engineer)
  );

  //근무기사를 먼저 상단에 보여주고 휴무기사는 리스트의 마지막에 나열
  //휴무인 기사는 상세 정보를 볼 수 없음
  return (
    <Box>
      {workingEngineers.map((engineer, i) => (
        <CCardAtom
          key={i}
          {...cardatomprops}
          engineerName={engineer.engineerName}
          onBtnClick={() => onEngineerClick(engineer)}
          selectDate={selectDate}
        />
      ))}

      {offDutyEngineers.map((engineer, i) => (
        <CCardAtom
          key={i + workingEngineers.length}
          engineerName={engineer.engineerName}
          imgURL={cardatomprops.imgURL}
          cardContent={'휴무'}
          btnContent={undefined}
          selectDate={selectDate}
        />
      ))}
    </Box>
  );
};

export default CCardList;
