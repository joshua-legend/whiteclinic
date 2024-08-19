'use client';

import KoreanDateCalendar from '@/app/ui/(Bteam)atom/calendar/calendar';
import ActionAreaCard from '@/app/ui/(Bteam)atom/card/card';

import dayjs from 'dayjs';
import React, { useState } from 'react';
import styled from 'styled-components';

// 색상 변수 정의
const colors = {
  background: '#f0f4f8',
  primary: '#3498db',
  secondary: '#2c3e50',
  card: '#ffffff',
  text: '#333333',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 500px) 1fr;
  gap: 30px;
  padding: 30px;
  background-color: ${colors.background};
  min-height: 100vh;
  align-items: start;
  justify-content: center;
`;
const CalendarContainer = styled.div`
  box-shadow: 0 10px 20px ${colors.shadow};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${colors.card};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px ${colors.shadow};
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
  padding: 25px;
  background-color: ${colors.card};
  border-radius: 15px;
  box-shadow: 0 10px 20px ${colors.shadow};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
    border-radius: 20px;
  }
`;

// ActionAreaCard 스타일 개선 (실제 컴포넌트 수정 필요)
const StyledActionAreaCard = styled(ActionAreaCard)`
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px ${colors.shadow};
  }
`;

// 임시 데이터
const dummyData = [
  { id: 1, name: '홍길동', date: '2024-08-01' },
  { id: 2, name: '김철수', date: '2024-08-02' },
  { id: 3, name: '이영희', date: '2024-08-03' },
  { id: 4, name: '박지성', date: '2024-08-04' },
  { id: 5, name: '손흥민', date: '2024-08-05' },
  { id: 6, name: '김연아', date: '2024-08-06' },
  { id: 7, name: '류현진', date: '2024-08-07' },
  { id: 8, name: '박세리', date: '2024-08-08' },
  { id: 9, name: '정우성', date: '2024-08-09' },
  { id: 10, name: '전지현', date: '2024-08-10' },
  { id: 11, name: '유재석', date: '2024-08-11' },
  { id: 12, name: '강호동', date: '2024-08-12' },
  { id: 13, name: '이효리', date: '2024-08-13' },
  { id: 14, name: '백종원', date: '2024-08-14' },
  { id: 15, name: '송가인', date: '2024-08-15' },
  { id: 16, name: '이승기', date: '2024-08-16' },
  { id: 17, name: '아이유', date: '2024-08-17' },
  { id: 18, name: '박보검', date: '2024-08-18' },
  { id: 19, name: '김태리', date: '2024-08-19' },
  { id: 20, name: '조정석', date: '2024-08-20' },
  { id: 21, name: '전미도', date: '2024-08-21' },
  { id: 22, name: '유연석', date: '2024-08-22' },
  { id: 23, name: '김희선', date: '2024-08-23' },
  { id: 24, name: '이병헌', date: '2024-08-24' },
  { id: 25, name: '송혜교', date: '2024-08-25' },
  { id: 26, name: '공유', date: '2024-08-26' },
  { id: 27, name: '김고은', date: '2024-08-27' },
  { id: 28, name: '조인성', date: '2024-08-28' },
  { id: 29, name: '손예진', date: '2024-08-29' },
  { id: 30, name: '강민석', date: '2024-08-30' },
  { id: 31, name: '이나영', date: '2024-08-31' },
];
export default function Page() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
    }
  };

  const filteredData = dummyData.filter((card) => dayjs(card.date).isSame(selectedDate, 'day'));

  return (
    <PageContainer>
      <CalendarContainer>
        <KoreanDateCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      </CalendarContainer>
      <RightSection>
        <CardsContainer>
          {filteredData.map((card) => (
            <StyledActionAreaCard key={card.id} name={card.name} />
          ))}
        </CardsContainer>
      </RightSection>
    </PageContainer>
  );
}
