'use client';
// Next.js에서 이 지시어는 이 컴포넌트가 클라이언트 사이드에서만 동작한다는 걸 의미함.

import * as React from 'react';
// React를 가져와서 JSX와 React 훅을 사용할 수 있도록 함.

import { Dropdown } from '@mui/base/Dropdown';
// MUI(Material-UI)의 기본 Dropdown 컴포넌트를 가져옴.

import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
// MUI의 기본 Menu 컴포넌트와 MenuListboxSlotProps 타입을 가져옴.

import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
// MUI의 기본 MenuButton 컴포넌트를 가져오고, BaseMenuButton이라는 이름으로 사용함.

import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
// MUI의 기본 MenuItem 컴포넌트를 BaseMenuItem이라는 이름으로 가져오고, menuItemClasses도 가져옴.

import { styled } from '@mui/system';
// styled 함수는 MUI의 스타일링 유틸리티를 가져옴.

import { CssTransition } from '@mui/base/Transitions';
// MUI에서 제공하는 CSS 전환 효과를 위한 컴포넌트를 가져옴.

import { PopupContext } from '@mui/base/Unstable_Popup';
// MUI의 Unstable_Popup에서 PopupContext를 가져옴. (비안정적이므로 주의 필요)

export default function MenuIntroduction() {
  const [selectedDay, setSelectedDay] = React.useState<string>('');

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      setSelectedDay(menuItem);
      // 각 메뉴 항목을 클릭했을 때 콘솔에 클릭된 항목 이름을 출력하는 함수
    };
  };

  return (
    <Dropdown>
      <MenuButton>{selectedDay || '날짜를 선택하세요'}</MenuButton>
      {/* Dropdown 메뉴 버튼을 정의함 */}
      <Menu slots={{ listbox: AnimatedListbox }}>
        {/* AnimatedListbox를 사용해서 메뉴 리스트박스를 생성함 */}
        <MenuItem onClick={createHandleMenuClick('월요일')}>월요일</MenuItem>
        <MenuItem onClick={createHandleMenuClick('화요일')}>화요일</MenuItem>
        <MenuItem onClick={createHandleMenuClick('수요일')}>수요일</MenuItem>
        <MenuItem onClick={createHandleMenuClick('목요일')}>목요일</MenuItem>
        <MenuItem onClick={createHandleMenuClick('금요일')}>금요일</MenuItem>
        <MenuItem onClick={createHandleMenuClick('토요일')}>토요일</MenuItem>
        <MenuItem onClick={createHandleMenuClick('일요일')}>일요일</MenuItem>
        {/* 각 메뉴 항목을 클릭했을 때 대응하는 함수가 실행되도록 설정함 */}
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};
// 파란색 계열의 색상 팔레트를 정의함.

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};
// 회색 계열의 색상 팔레트를 정의함.

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
);
// ul 요소를 스타일링하여 Listbox라는 스타일드 컴포넌트를 만듦.
// 메뉴가 열리고 닫힐 때의 전환 효과를 정의하고, 테마에 따라 색상을 다르게 설정함.

const AnimatedListbox = React.forwardRef(function AnimatedListbox(
  props: MenuListboxSlotProps,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component'
    );
    // AnimatedListbox는 Popup 컴포넌트 내부에서만 렌더링될 수 있다고 에러를 발생시킴.
  }

  const verticalPlacement = popupContext.placement.split('-')[0];
  // PopupContext에서 수직 배치 정보를 가져옴.

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
      {/* CssTransition을 사용해 열리고 닫히는 애니메이션 효과를 추가한 Listbox를 반환함 */}
    </CssTransition>
  );
});

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  `
);
// 각 메뉴 항목(MenuItem)을 스타일링함. 포커스 상태일 때의 스타일과 비활성화된 상태의 스타일을 정의함.

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `
);
// 메뉴 버튼(MenuButton)을 스타일링함. 클릭, 포커스, 활성화 상태일 때의 스타일을 정의함.
