import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { sizes } from '@/styles/sizes';

type Order = '발행 완료'; // 주문정보
type Revenue =
  | '종합세척' //매출사항
  | '일반세척' //매출사항
  | '할인적용'; //매출사항
type Salary =
  | '지급완료' //급여사항
  | '홍길동' //급여사항
  | '아무개' //급여사항
  | '임지현' //급여사항
  | '이몽룡' //급여사항
  | '김콩쥐'; //급여사항
type Engineer =
  | '벽걸이' //기사정보
  | '원웨이' //기사정보
  | '포웨이' //기사정보
  | '원형' //기사정보
  | '스탠드' //기사정보
  | '실외기' //기사정보
  | '덕트' //기사정보
  | '창문형' //기사정보
  | '통돌이' //기사정보
  | '드럼' //기사정보
  | '빌트인' //기사정보
  | '건조기' //기사정보
  | '휴무추가'; //기사정보

type Input = ''; //입력정보

type CheckBoxProps = {
  label: Order | Revenue | Salary | Engineer | Input;
  labelSize?: 'small' | 'medium' | 'large' | 'xlarge'; // 라벨의 크기 지정
  checkBoxSize?: 'small' | 'medium' | 'large' | 'xlarge'; // 체크박스 크기 지정
};

export const CheckBox = ({
  label = '',
  labelSize = 'medium',
  checkBoxSize = 'xlarge',
}: CheckBoxProps) => {
  const fontSize = sizes.fontSize[labelSize];
  const boxSize = sizes.fontSize[checkBoxSize];

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={{ boxSize, '& .MuiSvgIcon-root': { fontSize: sizes.fontSize[checkBoxSize] } }}
          />
        }
        label={<Typography sx={{ fontSize }}>{label}</Typography>}
      />
    </FormGroup>
  );
};
