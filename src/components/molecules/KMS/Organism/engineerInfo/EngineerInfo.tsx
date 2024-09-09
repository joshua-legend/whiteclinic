import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { CheckboxList } from '../../Melecules/engineerInfo/CheckboxList';
import { LeftInfoComponent } from './LeftInfoComponent';
import { RightInfoComponent } from './RightInfoComponent';
import CButton from '@/components/atom/CButton';
import { useEffect, useState } from 'react';
import CInput from '@/components/atom/CInput';
import { LeftInfoData, RightInfoData } from '@/constants/definition';

export const EngineerInfo = () => {
  const LeftRows = [
    LeftInfoData(
      ['6월3일', '6월4일', '6월5일', '6월6일', '6월7일', '6월8일', '6월9일'],
      ['100000', '100000', '100000', '100000', '200000', '100000', '0']
    ),
  ];

  const RightRows = [
    RightInfoData(
      ['합계수당', '수당률', '수당금액', '지급요일', '지급여부'],
      ['700,000', '5', '350,000', '금요일', '지급완료']
    ),
  ];

  const [showInfo, setShowInfo] = useState<boolean>(true);
  const [isModifiableLeft, setIsModifiableLeft] = useState<boolean[]>([]);
  const [isModifiableRight, setIsModifiableRight] = useState<boolean[]>([]);
  const [leftInputs, setLeftInputs] = useState(LeftRows[0].first);
  const [rightInputs, setRightInputs] = useState(LeftRows[0].first);

  useEffect(() => {
    setIsModifiableLeft(new Array(LeftRows[0].first.length).fill(false));
    setIsModifiableRight(new Array(LeftRows[0].first.length).fill(false));
    setLeftInputs(new Array(LeftRows[0].first.length).fill(false));
    setRightInputs(new Array(RightRows[0].first.length).fill(false));
  }, []);

  const handleModifyLeft = (index: number) => {
    setIsModifiableLeft((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const handleModifyRight = (index: number) => {
    setIsModifiableRight((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const handleLeftInput = (index: number, value: string) => {
    setLeftInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      console.log(leftInputs);
      return newInputs;
    });
  };
  const handleRightInput = (index: number, value: string) => {
    setRightInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      console.log(rightInputs);
      return newInputs;
    });
  };
  return (
    <Box
      sx={{
        width: '1500px',
        minHeight: '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '24px !important',
        margin: '24px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <CheckboxList />
      </Box>

      {showInfo ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            flex: 1,
            padding: '0 !important',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: '20px',
            }}
          >
            <LeftInfoComponent />
          </Box>
          <Box
            sx={{
              backgroundColor: 'white',
              padding: '20px',
            }}
          >
            <RightInfoComponent />
          </Box>
          <CButton content="급여사항확인" fontSize="large" handleClick={() => setShowInfo(false)} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            height: '700px',
            gap: '20px',
          }}
        >
          <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
            <Table>
              <TableBody>
                {LeftRows[0].row.map((left, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        letterSpacing: 5,
                        backgroundColor: '#f5f5f5',
                        width: '120px',
                        textAlign: 'center',
                      }}
                    >
                      {left}
                    </TableCell>
                    <TableCell sx={{ fontSize: 20, letterSpacing: 3 }}>
                      <CInput
                        variableValue={LeftRows[0].first[index]}
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
          <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
            <Table>
              <TableBody>
                {RightRows[0].row.map((right, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        letterSpacing: 5,
                        backgroundColor: '#f5f5f5',
                        width: '150px',
                        textAlign: 'center',
                      }}
                    >
                      {right}
                    </TableCell>
                    <TableCell sx={{ fontSize: 20, letterSpacing: 3 }}>
                      <CInput
                        variableValue={RightRows[0].first[index]}
                        isReadOnly={!isModifiableRight[index]}
                        isModifiable={true}
                        handleInput={(e) => handleRightInput(index, e.target.value)}
                        modifyInput={() => handleModifyRight(index)}
                        adornment={index === 0 || index === 2 ? '원' : index === 1 ? '%' : ''}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <CButton content="등록" />
        </Box>
      )}
    </Box>
  );
};
