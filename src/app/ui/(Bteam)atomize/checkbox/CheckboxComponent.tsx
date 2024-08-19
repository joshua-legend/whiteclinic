// 'use client';

// import React, { useState } from 'react';

// type CheckboxProps = {
//   label: string;
// };

// const Checkbox = ({ label }: CheckboxProps) => {
//   // 체크박스의 상태를 관리하기 위해 useState 생성
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <div>
//       <input
//         type="checkbox" // 체크박스 타입
//         checked={isChecked} // 현재 체크 상태를 반영(기본값: 빈박스)
//         onChange={() => setIsChecked(!isChecked)} // 토글 반영
//       />
//       {label}
//     </div>
//   );
// };

// const labels = [
//   '발행완료',
//   '일반세척',
//   '종합세척',
//   '할인적용',
//   '지급완료',
//   '벽걸이',
//   '원웨이',
//   '포웨이',
//   '원형',
//   '스탠드',
//   '실외기',
//   '덕트',
//   '창문형',
//   '통돌이',
//   '드럼',
//   '빌트인',
//   '건조기',
//   '휴뮤추가',
//   '민 / 석',
// ] as const; //배열 수정불가 push(), pop(), shift(), 등 사용불가

// type LabelType = (typeof labels)[number]; // 배열의 모든 요소의 타입을 LabelType으로 일치화시킴

// export const CheckboxInput = ({ label }: { label: LabelType }) => {
//   if (!labels.includes(label)) {
//     return null; // 또는 에러 처리
//   }
//   return <Checkbox label={label} />;
// };
export {};
