import React from 'react';
import { Box } from '@mui/material';
import LabelCheckBox, { LabelCheckBoxProps } from './LabelCheckBox';
import { TextProps } from 'recharts';
import ABasicInput, { ABasicInputProps } from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';

type EngineerRegisterProps = {
  textProps: TextProps;
  inputProps: ABasicInputProps;
  checkBoxProps: LabelCheckBoxProps;
  engneerObject: {
    [key: string]: {
      title: string;
      type: 'input' | 'checkbox';
    };
  };
};

const EnginnerLabel: React.FC<EngineerRegisterProps> = ({
  checkBoxProps,
  engneerObject,
  inputProps,
  textProps,
}) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: '1000px',
          margin: '0 auto',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        {Object.entries(engneerObject).map(([key, value], index) => (
          <Box
            key={key}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              borderBottom: '1px solid #ccc',
              minHeight: '56px',
            }}
          >
            <Box
              sx={{
                width: '120px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#F2F2F2',
                borderRight: '1px solid #ccc',
                padding: '8px',
              }}
            >
              <AText {...textProps} text={value.title} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
              }}
            >
              {value.type === 'input' ? (
                <ABasicInput {...inputProps} label={value.title} />
              ) : (
                <LabelCheckBox {...checkBoxProps} />
              )}
            </Box>
          </Box>
        ))}
        <div style={{ display: 'flex' }}>
          <ACustomButton text="취소" variant="outlined" color="default" size="full" />
          <ACustomButton text="등록" variant="contained" color="primary" size="full" />
        </div>
      </Box>
    </>
  );
};

export default EnginnerLabel;
