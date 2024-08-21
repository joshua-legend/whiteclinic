import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

type Order = '발행 완료'; // 주문정보
type Revenue = '종합세척' | '일반세척' | '할인적용'; //매출사항
type Salary = '지급완료' | '홍길동' | '아무개' | '임지현' | '이몽룡' | '김콩쥐'; //급여사항
type Engineer =
  | '벽걸이'
  | '원웨이'
  | '포웨이'
  | '원형'
  | '스탠드'
  | '실외기'
  | '덕트'
  | '창문형'
  | '통돌이'
  | '드럼'
  | '빌트인'
  | '건조기'
  | '휴무추가'; //기사정보

type Input = ''; //입력정보

type CheckBoxProps = {
  label: Order | Revenue | Salary | Engineer | Input;
  labelSize?: 'body2' | 'body1'; // 라벨의 크기 지정
  checkBoxSize?: 'small' | 'medium'; // 체크박스 크기 지정
};

export const CheckBox = ({
  label = '',
  labelSize = 'body2',
  checkBoxSize = 'small',
}: CheckBoxProps) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox size={checkBoxSize} />} // 체크박스
        label={<Typography variant={labelSize}>{label}</Typography>} // 라벨
      />
    </FormGroup>
  );
};
