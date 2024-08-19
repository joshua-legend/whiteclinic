import React from 'react';
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import QuantityInput from './customNumberInput';
import InputProps from './inputTypes';

// 고객정보입력 인풋 렌더러
export const CustomerInfoInput: React.FC<InputProps> = (props: InputProps) => {
  if ('name' in props && 'contact' in props && 'address' in props) {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required id="outlined-required" label={props.name} placeholder={props.name} />
        <TextField
          required
          id="outlined-required"
          label={props.contact}
          placeholder={props.contact}
        />
        <TextField
          required
          id="outlined-required"
          label={props.address}
          placeholder={props.address}
        />
      </Box>
    );
  }
};

// 특이사항 입력 인풋 렌더러
export const ExtraInfoRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('ps' in props) {
    return <Input aria-label="ExtraInfoInput" multiline placeholder="특이사항" />;
  }
};

// 할인율 입력인풋 렌더러
export const DiscountRatioInputRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('discount' in props) {
    return <input type="text" placeholder="할인율을 입력해주세요" onChange={props.CalFn} />;
  }
};

// 연도입력 인풋 렌더러
export const YearInputRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('thisYear' in props) {
    return (
      <TextField
        label="연도"
        type="number"
        placeholder={String(props.thisYear)}
        InputProps={{ inputProps: { min: 1900, max: new Date().getFullYear() } }}
        // 최소, 최대값 설정
        variant="outlined"
      />
    );
  }
};

// 세척대수입력 인풋 렌더러
export const ProductQuantityInputRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('modelEA' in props) {
    return <QuantityInput />;
  }
};

// 할인율 자동계산 후 출력인풋 렌더러
export const DiscountValueRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('calResult' in props) {
    return (
      <TextField
        id="DiscountCal"
        label="할인된 금액 출력"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
    );
  }
};

// 수당입력 인풋 렌더러
export const DailyIncomeInputRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('dailyIncome' in props) {
    return (
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl>
    );
  }
};

// 수당합계 인풋 렌더러
export const TotalIncomeInputRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('totalIncome' in props) {
    return <TextField id="totalIncome" label="수당 합계" variant="outlined" />;
  }
};
// 분류 불가능한 세척품목 인풋 렌더러
export const ProductNameInputRenderer: React.FC<InputProps> = (props: InputProps) => {
  if ('productName' in props) {
    return <TextField id="unusualProduct" label="분류 불가능한 세척품목" variant="outlined" />;
  }
};
