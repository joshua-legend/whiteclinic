'use client';

import React from 'react';
import { MultiPurposeButton } from './ui/(Bteam)atomize/button/Button';
import { MultiPurposeInput } from './ui/(Bteam)atomize/input/MultiPurposeInput';

export default function Home() {
  return (
    // 홈화면입니다.
    <main className="flex min-h-screen flex-col p-6">
      HOME 화면입니다
      <div className="flex flex-col w-full h-fit">
        <div className="flex flex-row w-full h-fit">
          <MultiPurposeButton submitFn={() => console.log('Cancle Submit!')} text="아니오" />
          <MultiPurposeButton submitFn={() => console.log('Submit!')} text="등록" />
        </div>
        <div>
          <MultiPurposeButton RegisterFn={() => console.log('Cancle Register!')} text="취소" />
          <MultiPurposeButton RegisterFn={() => console.log('Register!')} text="등록" />
        </div>
        <div className="flex flex-row w-full h-fit">
          <MultiPurposeButton
            ExRegisterFn={() => console.log('Cancle Extra Register!')}
            text="등록중지"
          />
          <MultiPurposeButton ExRegisterFn={() => console.log('Extra Register!')} text="추가등록" />
        </div>
        <div className="flex flex-row w-full h-fit">
          <MultiPurposeButton
            salaryCheckFn={() => console.log('Check Salary!')}
            text="급여사항 확인"
          />
        </div>
      </div>
      <div>
        <h1>고객 정보</h1>
        <MultiPurposeInput name="고객 성함" contact="고객 연락처" address="의뢰지" />

        <h1>특이 사항</h1>
        <MultiPurposeInput ps="특이사항을 적어주세요." />

        <h1>할인율</h1>
        <MultiPurposeInput discount={15} />

        <h1>연도입력</h1>
        <MultiPurposeInput thisYear={2024} />

        <h1>세척 대수</h1>
        <MultiPurposeInput modelEA={10} />

        <h1>계산된 값</h1>
        <MultiPurposeInput CalFn={() => console.log('CalFn Called')} />
      </div>
    </main>
  );
}
