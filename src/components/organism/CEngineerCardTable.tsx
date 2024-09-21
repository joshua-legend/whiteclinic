import CDatePicker from '@/components/atom/CDatePicker';
import { engineerInfo, TODAY } from '@/constants/definition';
import { Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import CCardList from '../molecules/LJW/showCard/CCardList';
import { CCardAtomProps } from '../molecules/LJW/showCard/CCardAtom';

const CEngineerCardTable = () => {
  const [selectDate, setSelectDate] = useState<Dayjs | null>(TODAY);
  const [selectEng, setSelectEng] = useState<engineerInfo | null>(null);

  const handleSelectDate = (date: Dayjs | null) => setSelectDate(date);
  const handleEngineer = (engineer: engineerInfo) => setSelectEng(engineer);

  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  const formattedDay = selectDate ? selectDate.locale('ko').format('ddd') : '';
  const cardInfo: CCardAtomProps = {
    engineerName: selectEng ? selectEng.engineerName : '',
    imgURL: selectEng ? selectEng.engineerImgUrl : '',
    cardContent: selectEng
      ? `${(selectEng.engineerClosedDate, selectEng.engineerClosedDay, selectEng.engineerAbleItem)}`
      : '',
    btnContent: selectEng ? '상세 보기' : undefined,
    selectDate: formattedDate,
  };

  return (
    <Box>
      <CDatePicker
        value={selectDate}
        handleChange={handleSelectDate}
        mindateValue={dayjs('1900-01-01')}
      />
      <CCardList
        cardatomprops={cardInfo}
        selectDay={formattedDay}
        selectDate={formattedDate}
        onEngineerClick={handleEngineer}
      />
    </Box>
  );
};

export default CEngineerCardTable;
