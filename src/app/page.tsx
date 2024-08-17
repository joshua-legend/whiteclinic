'use client';

import React from 'react';
import { MultiPurposeButton } from './ui/(Bteam)atomize/button/Button';
import { MultiPurposeInput } from './ui/(Bteam)atomize/input/MultiPurposeInput';

export default function Home() {
  return (
    // 홈화면입니다.
    <main className="flex min-h-screen flex-col p-6">
      HOME 화면입니다
      <MultiPurposeButton submitFn={() => console.log('Submit!')} text="등록" />
      <MultiPurposeButton RegisterFn={() => console.log('Register!')} text="취소" />
      <MultiPurposeButton ExRegisterFn={() => console.log('Extra Register!')} text="추가등록" />
      <MultiPurposeButton salaryCheckFn={() => console.log('Check Salary!')} text="급여사항 확인" />
      <div>
        <h1>Customer Info</h1>
        <MultiPurposeInput name="John Doe" contact="123-456-7890" address="123 Main St" />

        <h1>Special Notes</h1>
        <MultiPurposeInput ps="This is a special note." />

        <h1>Discount Rate</h1>
        <MultiPurposeInput discount={15} />

        <h1>Year Selection</h1>
        <MultiPurposeInput thisYear={2024} />

        <h1>Model Count</h1>
        <MultiPurposeInput modelEA={10} />

        <h1>Calculate Something</h1>
        <MultiPurposeInput CalFn={() => alert('Calculation done!')} />
      </div>
    </main>
  );
}
