'use client';

import React from 'react';

import BasicDateCalendar from '@/app/ui/minsuk/(Bteam)atom/schedule_table/schedule';
import ActionAreaCard from '@/app/ui/minsuk/(Bteam)atom/schedule_table/card';
import { WallMounted } from '@/app/ui/minsuk/(Bteam)atom/checkbox/CheckboxInput';
import MenuIntroduction from '@/app/ui/minsuk/(Bteam)atom/dropdown/MenuIntroduction';
import { styled } from '@mui/material';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px', // 패딩 줄임
  gap: '15px', // 간격 조정
});

const CalendarContainer = styled('div')({
  width: '100%',
  maxWidth: '1050px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
});

const CardsContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

// 더 다양한 임시 데이터
const dummyData = [
  { id: 1, name: '홍길동', info: '오전 근무 (08:00-12:00)', date: '2023-12-25' },
  { id: 2, name: '김철수', info: '오후 근무 (13:00-18:00)', date: '2023-12-25' },
  { id: 3, name: '이영희', info: '야간 근무 (19:00-06:00)', date: '2023-12-26' },
  { id: 4, name: '박지성', info: '휴무', date: '2023-12-26' },
  { id: 5, name: '손흥민', info: '오전 근무 (09:00-13:00)', date: '2023-12-27' },
  { id: 6, name: '김연아', info: '오후 근무 (14:00-19:00)', date: '2023-12-27' },
  { id: 7, name: '류현진', info: '야간 근무 (20:00-07:00)', date: '2023-12-28' },
  { id: 8, name: '박세리', info: '오전 근무 (07:00-11:00)', date: '2023-12-28' },
  { id: 9, name: '류현진', info: '오전 근무 (07:00-11:00)', date: '2023-12-28' },
  { id: 10, name: '손흥민', info: '오전 근무 (07:00-11:00)', date: '2023-12-28' },
  { id: 11, name: '박지성', info: '오전 근무 (07:00-11:00)', date: '2023-12-28' },
  { id: 12, name: '홍길동', info: '오전 근무 (07:00-11:00)', date: '2023-12-28' },
  { id: 13, name: '김철수', info: '오전 근무 (07:00-11:00)', date: '2023-12-28' },
];

export default function Page() {
  return (
    <PageContainer>
      <CalendarContainer>
        <BasicDateCalendar />
      </CalendarContainer>
      <CardsContainer>
        {dummyData.map((card) => (
          <ActionAreaCard key={card.id} name={card.name} info={card.info} />
        ))}
      </CardsContainer>
    </PageContainer>
  );
}
