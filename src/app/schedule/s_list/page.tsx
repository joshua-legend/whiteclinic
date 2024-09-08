'use client';

import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import { CheckboxGroupProps } from '@/conponents/molecules/checkbox/OneCheckbox';

import WorkcerCheckbox from '@/conponents/molecules/checkbox/WorkerCheckbox';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import ADaySelector from '@/conponents/molecules/Select/ADaySelector';
import APercent from '@/conponents/molecules/Select/APercent';
import LabelBox from '@/conponents/organism/yh/LabelBox';
import Table from '@/conponents/organism/yh/Table';
import { WorkerWage } from '@/constants/Workers';
import { Box } from '@mui/material';
import { useState } from 'react';

// checkboxes 객체를 컴포넌트 외부에서 생성
const checkboxes: CheckboxGroupProps['checkboxes'] = Object.keys(WorkerWage).reduce(
  (acc, worker) => {
    acc[worker] = {
      isCheck: false,
      onChange: () => {},
      textprops: { text: WorkerWage[worker].name },
    };
    return acc;
  },
  {} as CheckboxGroupProps['checkboxes']
);

const Page = () => {
  const [selectedWorker, setSelectedWorker] = useState<string | null>(null);
  const [wageRate, setWageRate] = useState('0%');
  const [paymentDay, setPaymentDay] = useState('');
  const [manualWageAmount, setManualWageAmount] = useState<number | null>(null);

  const handleCheckboxChange = (worker: string | null) => {
    setSelectedWorker(worker);
    if (worker === null) {
      setManualWageAmount(null);
    }
  };

  const handleWageAmountChange = (newAmount: number) => {
    setManualWageAmount(Math.floor(newAmount));
  };

  const handleWageRateChange = (newRate: string) => {
    setWageRate(newRate);
  };

  const handlePaymentDayChange = (newDay: string) => {
    setPaymentDay(newDay);
  };

  const selectedWorkerData = selectedWorker ? WorkerWage[selectedWorker] : null;
  const wage = selectedWorkerData
    ? selectedWorkerData.datePay.map((item) => ({
        date: item.date,
        amount: parseInt(item.pay),
      }))
    : [];

  const totalWage = wage.reduce((sum, item) => sum + item.amount, 0);
  const wageAmount = Math.floor(
    manualWageAmount !== null ? manualWageAmount : totalWage * (parseInt(wageRate) / 100)
  );
  return (
    <Box
      sx={{
        height: 'calc(100vh - 112px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '502px' }}>
        <LabelBox text="기사성함">
          <AVariableModifyInputBox placeholder="직접입력" />
        </LabelBox>
        <LabelBox text="수당률">
          <APercent value={wageRate} onChange={handleWageRateChange} />
        </LabelBox>
        <LabelBox text="급여요일">
          <ADaySelector value={paymentDay} onChange={handlePaymentDayChange} />
        </LabelBox>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <ACustomButton text="취소" color="default" variant="contained" sx={{ flex: 1 }} />
          <ACustomButton text="등록" color="primary" variant="contained" sx={{ flex: 1 }} />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'gold', padding: '10px', borderRadius: '4px' }}>
        <WorkcerCheckbox
          checkboxes={checkboxes}
          onChange={handleCheckboxChange}
          value={selectedWorker}
        />
      </Box>

      {selectedWorkerData && (
        <Table
          wage={wage}
          totalWage={totalWage}
          wageRate={wageRate}
          paymentDay={paymentDay}
          wageAmount={wageAmount}
          onWageAmountChange={handleWageAmountChange}
        />
      )}
    </Box>
  );
};

export default Page;
