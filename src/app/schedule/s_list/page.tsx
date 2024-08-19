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

// 전체 페이지 컨테이너 스타일 정의
const PageContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 500px) 1fr;
  gap: 30px;
  padding: 30px;
  background-color: ${colors.background};
  /* height: 100vh;  */
  overflow: hidden; /* 외부 페이지에 스크롤이 생기지 않도록 설정 */
  align-items: start;
  justify-content: center;
`;

// 달력 컨테이너 스타일 정의
const CalendarContainer = styled.div`
  box-shadow: 0 10px 20px ${colors.shadow};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${colors.card};
  transition: all 0.3s ease;
  max-height: 100%; /* 달력 컨테이너 높이 제한 */
  overflow-y: auto; /* 달력 컨테이너 내에서 스크롤 발생 */

  &:hover {
    box-shadow: 0 15px 30px ${colors.shadow};
  }
`;

// 오른쪽 섹션 스타일 정의
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%; /* 오른쪽 섹션 높이 제한 */
  overflow-y: auto; /* 오른쪽 섹션 내에서 스크롤 발생 */
`;

// 카드 컨테이너 스타일 정의
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 25px;
  background-color: ${colors.card};
  border-radius: 15px;
  box-shadow: 0 10px 20px ${colors.shadow};
  overflow-y: auto; /* 카드 컨테이너 내에서 스크롤 발생 */
  max-height: 1099px; /* 카드 컨테이너 높이 제한 */

  // 스크롤바 스타일 정의
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
  { id: 30, name: '홍길동', date: '2024-08-20' },
  { id: 31, name: '홍길동', date: '2024-08-20' },
  { id: 32, name: '홍길동', date: '2024-08-20' },
  { id: 33, name: '홍길동', date: '2024-08-20' },
  { id: 34, name: '홍길동', date: '2024-08-20' },
  { id: 35, name: '홍길동', date: '2024-08-20' },
  { id: 36, name: '홍길동', date: '2024-08-20' },
  { id: 37, name: '홍길동', date: '2024-08-20' },
  { id: 38, name: '홍길동', date: '2024-08-20' },
  { id: 39, name: '홍길동', date: '2024-08-20' },
  { id: 40, name: '홍길동', date: '2024-08-20' },
  { id: 41, name: '홍길동', date: '2024-08-20' },
  { id: 42, name: '홍길동', date: '2024-08-20' },
  { id: 43, name: '홍길동', date: '2024-08-20' },
  { id: 44, name: '홍길동', date: '2024-08-20' },
  { id: 45, name: '홍길동', date: '2024-08-20' },
  { id: 46, name: '홍길동', date: '2024-08-20' },
  { id: 47, name: '홍길동', date: '2024-08-20' },
  { id: 48, name: '홍길동', date: '2024-08-20' },
  { id: 49, name: '홍길동', date: '2024-08-20' },
  { id: 50, name: '홍길동', date: '2024-08-20' },
  { id: 51, name: '홍길동', date: '2024-08-20' },
  { id: 52, name: '홍길동', date: '2024-08-20' },
  { id: 53, name: '홍길동', date: '2024-08-20' },
  { id: 54, name: '홍길동', date: '2024-08-20' },
  { id: 55, name: '홍길동', date: '2024-08-20' },
  { id: 56, name: '홍길동', date: '2024-08-20' },
  { id: 57, name: '홍길동', date: '2024-08-20' },
  { id: 58, name: '홍길동', date: '2024-08-20' },
  { id: 59, name: '홍길동', date: '2024-08-20' },
  { id: 60, name: '홍길동', date: '2024-08-20' },
  { id: 61, name: '홍길동', date: '2024-08-20' },
  { id: 62, name: '홍길동', date: '2024-08-20' },
  { id: 63, name: '홍길동', date: '2024-08-20' },
  { id: 64, name: '홍길동', date: '2024-08-20' },
  { id: 65, name: '홍길동', date: '2024-08-20' },
  { id: 66, name: '홍길동', date: '2024-08-20' },
  { id: 67, name: '홍길동', date: '2024-08-20' },
  { id: 68, name: '홍길동', date: '2024-08-20' },
  { id: 69, name: '홍길동', date: '2024-08-20' },
  { id: 70, name: '홍길동', date: '2024-08-20' },
  { id: 71, name: '홍길동', date: '2024-08-20' },
  { id: 72, name: '홍길동', date: '2024-08-20' },
  { id: 73, name: '홍길동', date: '2024-08-20' },
  { id: 74, name: '홍길동', date: '2024-08-20' },
  { id: 75, name: '홍길동', date: '2024-08-20' },
  { id: 76, name: '홍길동', date: '2024-08-20' },
  { id: 77, name: '홍길동', date: '2024-08-20' },
  { id: 78, name: '홍길동', date: '2024-08-20' },
  { id: 79, name: '홍길동', date: '2024-08-20' },
  { id: 80, name: '홍길동', date: '2024-08-20' },
  { id: 81, name: '홍길동', date: '2024-08-20' },
  { id: 82, name: '홍길동', date: '2024-08-20' },
  { id: 83, name: '홍길동', date: '2024-08-20' },
  { id: 84, name: '홍길동', date: '2024-08-20' },
  { id: 85, name: '홍길동', date: '2024-08-20' },
];
export default function Page() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
    }
  };

  // 선택된 날짜에 해당하는 데이터만 필터링
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
