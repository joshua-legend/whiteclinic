'use client';

import React from 'react';
import DropDownBar from './ui/(Bteam)atomize/dropdown/DropDownBar';
import {
  AllowanceRates,
  CleaningItem,
  Documents,
  PaymentMethods,
  WeekDays,
} from './ui/(Bteam)atomize/dropdown/DropDownList';
import EngineerContent from './ui/(Bteam)atomize/schedule_table/component/engineerContent';
import ButtonFrame from './atom/buttonframe/Frame';
import InputComponent from './atom/inputFrame/inputs';
import { containerStyle } from '@/styles/sizes';
import { currentYear } from './types';

export default function Home() {
  const testValue = 35000;
  const testFn = () => console.log('function test');
  return (
    // 홈화면입니다.
    <main className="flex min-h-screen flex-col p-6">
      HOME 화면입니다
      <div className="flex flex-col w-full h-fit">
        <div className="flex flex-row w-full h-fit">
          <ButtonFrame text="아니오" btnType="button" onClick={testFn} />
          <ButtonFrame text="등록" btnType="submit" onClick={testFn} />
        </div>
        <div>
          <ButtonFrame text="취소" btnType="button" onClick={testFn} />
          <ButtonFrame text="등록" btnType="submit" onClick={testFn} />
        </div>
        <div className="flex flex-row w-full h-fit">
          <ButtonFrame text="등록중지" btnType="button" onClick={testFn} />
          <ButtonFrame text="추가등록" btnType="submit" onClick={testFn} />
        </div>
        <div className="flex flex-row w-full h-fit">
          <ButtonFrame text="급여사항확인" btnType="submit" onClick={testFn} />
        </div>
      </div>
      <div>
        <h1>고객 정보</h1>
        <InputComponent labelProp="고객 성함" placeholderProp="이름을 입력하세요" type="text" />
        <InputComponent
          labelProp="고객 연락처"
          placeholderProp="`-` 를 제외하고 입력하세요"
          type="text"
        />
        <InputComponent
          labelProp="고객 주소지"
          placeholderProp="상세 주소를 입력하세요"
          type="text"
        />

        <h1>특이 사항</h1>
        <InputComponent
          labelProp="특이사항"
          placeholderProp="특이사항이 있을 시 기입하세요."
          type="text"
          isRequired={false}
          containerWidth={containerStyle.xlargeWidth.width}
        />

        <h1>할인율</h1>
        <InputComponent
          placeholderProp="할인율을 입력하세요"
          functionProp={testFn}
          type="number"
          containerWidth={containerStyle.mediumWidth.width}
        />

        <h1>할인된 값</h1>
        <InputComponent
          placeholderProp="할인 금액 출력"
          isReadOnly={true}
          variableValue={testValue}
        />

        <h1>연도입력</h1>
        <InputComponent
          labelProp="연도"
          placeholderProp="연도 입력"
          type="number"
          containerWidth={containerStyle.smallWidth.width}
        />

        <h1>세척 대수</h1>
        <InputComponent isQuantityInput={true} minValue={0} maxValue={99} type="number" />

        <h1>수당입력</h1>
        <InputComponent
          labelProp="수당"
          functionProp={testFn}
          type="number"
          containerWidth={containerStyle.mediumWidth.width}
        />

        <h1>수당합계</h1>
        <InputComponent
          labelProp="수당 합계"
          isReadOnly={true}
          containerWidth={containerStyle.mediumWidth.width}
        />

        <h1>분류 불가능한 세척품목</h1>
        <InputComponent
          labelProp="제품명 입력"
          placeholderProp="분류 불가능한 세척품목"
          type="text"
          isRequired={false}
          containerWidth={containerStyle.largeWidth.width}
        />
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
    </main>
  );
}
