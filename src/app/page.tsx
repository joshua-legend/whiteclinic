'use client';

import React from 'react';
import { MultiPurposeButton } from './ui/(Bteam)atomize/button/MultiPurposeButton';
import { MultiPurposeInput } from './ui/(Bteam)atomize/input/MultiPurposeInput';
import DropDownBar from './ui/(Bteam)atomize/dropdown/DropDownBar';
import {
  AllowanceRates,
  CleaningItem,
  Documents,
  PaymentMethods,
  WeekDays,
} from './ui/(Bteam)atomize/dropdown/DropDownList';
import EngineerContent from './ui/(Bteam)atomize/schedule_table/component/engineerContent';
import { CheckboxInput } from './ui/(Bteam)atomize/checkbox/CheckboxComponent';
import ButtonFrame from './atom/button/Frame';
import InputComponent from './atom/input/inputs';
import { sizes } from '@/styles/sizes';
import { colors } from '@/styles/colors';

export default function Home() {
  const testfn = () => console.log('onChange Function Called');
  return (
    // 홈화면입니다.
    <main className="flex min-h-screen flex-col p-6">
      HOME 화면입니다
      <div className="flex flex-row w-fit">
        <ButtonFrame text="취소" />
        <ButtonFrame text="등록" />
      </div>
      <div>
        <div className="flex flex-row w-fit">
          <ButtonFrame text="아니오" />
          <ButtonFrame text="등록" />
        </div>
        <div className="flex flex-row w-fit">
          <ButtonFrame text="등록중지" />
          <ButtonFrame text="추가등록" />
        </div>
        <div className="flex flex-row w-fit">
          <ButtonFrame text="급여사항확인" />
        </div>
      </div>
      <div>
        <h1>고객 정보</h1>
        <MultiPurposeInput name="고객 성함" contact="고객 연락처" address="주소지" />
        <InputComponent
          labelProp="고객 성함"
          placeholderProp="홍길동"
          type="text"
          functionProp={{ CalFn: () => testfn() }}
        />
        <InputComponent labelProp="고객 연락처" placeholderProp="010 - 0000 - 0000" />
        <InputComponent labelProp="고객 주소지" placeholderProp="상세 주소를 입력하세요" />
        <h1>특이 사항</h1>
        <MultiPurposeInput ps="특이사항을 적어주세요." />
        <InputComponent labelProp="특이사항" placeholderProp="특이사항 있을 시 추가" />
        <h1>할인율</h1>
        <MultiPurposeInput discount={15} CalFn={() => console.log('CalFn Called')} />
        <InputComponent labelProp="할인율" placeholderProp="할인율을 입력하세요" />
        <h1>할인된 값</h1>
        <MultiPurposeInput calResult={0} />
        <InputComponent placeholderProp="할인 금액 출력" isReadOnly={true} />
        <h1>연도입력</h1>
        <MultiPurposeInput thisYear={2024} />
        <InputComponent labelProp="연도" placeholderProp={new Date().getFullYear()} />

        <h1>세척 대수</h1>
        <MultiPurposeInput modelEA={10} />

        <h1>수당입력</h1>
        <MultiPurposeInput dailyIncome={120000} />
        <InputComponent labelProp="수당" />

        <h1>수당합계</h1>
        <MultiPurposeInput totalIncome={700000} />
        <InputComponent labelProp="수당 합계" />
        <h1>분류 불가능한 세척품목</h1>
        <MultiPurposeInput productName="린나이 드럼세탁기" />
        <InputComponent labelProp="제품명 입력" />
      </div>
      <div>
        <h1>세척품목</h1>
        <DropDownBar contentName="세척품목" contentList={CleaningItem} />

        <h1>결제방식</h1>
        <DropDownBar contentName="결제방식" contentList={PaymentMethods} />

        <h1>증빙서류</h1>
        <DropDownBar contentName="증빙서류" contentList={Documents} />

        <h1>수당률</h1>
        <DropDownBar contentName="수당률" contentList={AllowanceRates} />

        <h1>급여요일</h1>
        <DropDownBar contentName="급여요일" contentList={WeekDays} />
      </div>
      <div>
        <EngineerContent engineerName="박형식" engineerDate="2024-06-24" />
      </div>
      <CheckboxInput label="발행완료" />
      <CheckboxInput label="일반세척" />
      <CheckboxInput label="종합세척" />
      <CheckboxInput label="할인적용" />
      <CheckboxInput label="지급완료" />
      <CheckboxInput label="벽걸이" />
      <CheckboxInput label="원웨이" />
      <CheckboxInput label="포웨이" />
      <CheckboxInput label="원형" />
      <CheckboxInput label="스탠드" />
      <CheckboxInput label="실외기" />
      <CheckboxInput label="덕트" />
      <CheckboxInput label="창문형" />
      <CheckboxInput label="통돌이" />
      <CheckboxInput label="드럼" />
      <CheckboxInput label="빌트인" />
      <CheckboxInput label="건조기" />
      <CheckboxInput label="휴뮤추가" />
    </main>
  );
}
