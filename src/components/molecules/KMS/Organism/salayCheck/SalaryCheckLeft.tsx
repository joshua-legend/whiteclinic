import CInput from '@/components/atom/CInput';
import { SalaryCheckLeftStyle } from '@/styles/customize';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { error } from 'console';
import { useEffect, useState } from 'react';
import { EngineerSalary } from '../../../../../../Backend/white-clinic-back/src/whiteClinic/entity/EngineerSalary.entity';

export const LeftRows = {
  '6월3일': '100000',
  '6월4일': '100000',
  '6월5일': '100000',
  '6월6일': '100000',
  '6월7일': '200000',
  '6월8일': '100000',
  '6월9일': '0',
  '6월10일': '111',
};

export const SalaryCheckLeft = () => {
  const dates = Object.keys(LeftRows); //왼쪽 날짜
  const value = Object.values(LeftRows); // 왼쪽 금액
  const [isModifiableLeft, setIsModifiableLeft] = useState<boolean[]>([]); //연필 왼쪽
  const [leftInputs, setLeftInputs] = useState(dates); //왼쪽인풋

  useEffect(() => {
    const fetchEngineerSalary = async () => {
      try {
        const response = await fetch('http://localhost:9090/engineer/salary');
        if (!response.ok) {
          throw new Error('수당정보를 가져오지 못했습니다.');
        }
        const engineerSalaryData: EngineerSalary[] = await response.json();
        console.log(engineerSalaryData);
      } catch (error) {
        console.error('오류', error);
      }
    };
    fetchEngineerSalary();
  }, []);

  useEffect(() => {
    setIsModifiableLeft(new Array(dates.length).fill(false)); //연필모양 (왼쪽)
    setLeftInputs(new Array(value.length).fill(false)); // 인풋 (왼쪽)
  }, [value.length]);

  //왼쪽 연필상태 관리 함수
  const handleModifyLeft = (index: number) => {
    setIsModifiableLeft((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  //왼쪽 인풋상태함수
  const handleLeftInput = (index: number, value: string) => {
    setLeftInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      console.log(leftInputs);
      return newInputs;
    });
  };
  return (
    <div>
      <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <Table>
          <TableBody>
            {dates.map((left, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    ...SalaryCheckLeftStyle,
                  }}
                >
                  {left}
                </TableCell>
                <TableCell sx={{ fontSize: 20, letterSpacing: 3 }}>
                  <CInput
                    variableValue={value[index]}
                    isReadOnly={!isModifiableLeft[index]}
                    isModifiable={true}
                    type="number"
                    modifyInput={() => handleModifyLeft(index)}
                    handleInput={(e) => handleLeftInput(index, e.target.value)}
                    adornment="원"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
