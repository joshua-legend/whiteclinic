'use client'; // Next.js에서 클라이언트 사이드에서만 실행되는 컴포넌트라는 걸 표시함.

import React from 'react'; // React 라이브러리에서 컴포넌트를 불러옴.
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // MUI Date Picker에서 로케일 설정을 도와주는 컴포넌트를 가져옴.
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Day.js를 MUI Date Picker에서 사용하기 위한 어댑터.
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'; // MUI에서 제공하는 캘린더 컴포넌트를 불러옴.
import dayjs, { Dayjs } from 'dayjs'; // 날짜 처리 라이브러리인 Day.js와 그 타입을 가져옴.
import 'dayjs/locale/ko'; // Day.js에서 한국어 로케일을 불러옴.

dayjs.locale('ko'); // Day.js의 기본 로케일을 한국어로 설정.

type KoreanDateCalendarProps = {
  selectedDate: Dayjs; // 선택된 날짜를 나타내는 Dayjs 타입의 값.
  onDateChange: (newDate: Dayjs | null) => void; // 날짜가 바뀔 때 호출되는 함수. 새 날짜를 인자로 받음.
};

export default function KoreanDateCalendar({
  selectedDate, // 선택된 날짜를 props로 받음.
  onDateChange, // 날짜 변경 핸들러를 props로 받음.
}: KoreanDateCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      {/* MUI Date Picker를 로케일에 맞게 사용하기 위한 컴포넌트. Day.js와 한국어 로케일을 사용함. */}

      <DateCalendar
        value={selectedDate} // 현재 선택된 날짜를 표시함.
        onChange={onDateChange} // 날짜가 변경되면 이 함수가 호출됨.
        sx={{
          width: '100%', // 캘린더 너비를 부모 컨테이너에 맞추기 위해 100%로 설정.
          maxWidth: '400px', // 캘린더의 최대 너비를 400px로 제한.
          height: 'auto', // 캘린더의 높이를 자동으로 설정.
          '& .MuiPickersCalendarHeader-root': {
            paddingLeft: '8px', // 캘린더 헤더의 왼쪽 패딩을 8px로 설정.
            paddingRight: '8px', // 캘린더 헤더의 오른쪽 패딩을 8px로 설정.
            marginBottom: '8px', // 캘린더 헤더 아래쪽에 8px의 마진을 추가.
            '& .MuiPickersCalendarHeader-label': {
              fontSize: '24px', // 캘린더 헤더의 라벨 폰트 크기를 24px로 설정.
              fontWeight: 'bold', // 라벨의 폰트를 굵게 설정.
            },
            '& .MuiPickersArrowSwitcher-button': {
              width: '32px', // 월 전환 화살표 버튼의 너비를 32px로 설정.
              height: '32px', // 월 전환 화살표 버튼의 높이를 32px로 설정.
            },
          },
          '& .MuiDayCalendar-header': {
            '& .MuiTypography-root': {
              fontSize: '16px', // 요일 헤더의 텍스트 크기를 16px로 설정.
              fontWeight: 'bold', // 요일 텍스트를 굵게 설정.
              color: 'text.secondary', // 텍스트 색상을 보조 텍스트 색상으로 설정.
              width: 'calc(100% / 7)', // 요일 헤더의 너비를 7등분하여 설정.
              margin: 0, // 마진을 0으로 설정.
            },
          },
          '& .MuiDayCalendar-monthContainer': {
            marginTop: '8px', // 월 표시 컨테이너의 상단 마진을 8px로 설정.
          },
          '& .MuiPickersDay-root': {
            fontSize: '17.6px', // 날짜 셀의 폰트 크기를 17.6px로 설정.
            margin: 0, // 날짜 셀의 마진을 0으로 설정.
            height: '40px', // 날짜 셀의 높이를 40px로 설정.
            width: 'calc(100% / 7)', // 날짜 셀의 너비를 7등분하여 설정.
            '&:hover': {
              backgroundColor: 'primary.light', // 마우스를 올렸을 때 배경색을 주 색상의 밝은 버전으로 설정.
            },
          },
          '& .MuiPickersDay-today': {
            borderColor: 'primary.main', // 오늘 날짜 셀의 테두리 색상을 주 색상으로 설정.
          },
          '& .MuiPickersDay-selected': {
            backgroundColor: 'primary.main', // 선택된 날짜 셀의 배경색을 주 색상으로 설정.
            color: 'primary.contrastText', // 선택된 날짜 셀의 텍스트 색상을 대비되는 색상으로 설정.
            '&:hover, &:focus': {
              backgroundColor: 'primary.dark', // 선택된 날짜 셀에 마우스를 올리거나 포커스할 때 배경색을 주 색상의 어두운 버전으로 설정.
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
