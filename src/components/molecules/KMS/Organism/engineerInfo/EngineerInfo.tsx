import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { CheckboxList } from '../../Melecules/engineerInfo/CheckboxList';
import { LeftInfoComponent } from './LeftInfoComponent';
import { RightInfoComponent } from './RightInfoComponent';
import CButton from '@/components/atom/CButton';
import { Children, useState } from 'react';
import CCheckbox from '@/components/atom/CCheckbox';

export const LeftInfoData = (row: string[], first: string[]) => {
  return { row, first };
};

type RightInfoType = {
  row: '합계수당' | '수당률' | '수당금액' | '지급요일' | '지급여부';
};

export const RightInfoData = (row: RightInfoType['row'][], first: string[]) => {
  return { row, first };
};

export const EngineerInfo = () => {
  const [showInfo, setShowInfo] = useState<boolean>(true);

  const LeftRows = [
    LeftInfoData(
      ['6월3일', '6월4일', '6월5일', '6월6일', '6월7일', '6월8일', '6월9일'],
      ['100,000원', '100,000원', '100,000원', '100,000원', '200,000원', '100,000원', '0원']
    ),
  ];

  const RightRows = [
    RightInfoData(
      ['합계수당', '수당률', '수당금액', '지급요일', '지급여부'],
      ['700,000원', '50%', '350,000원', '금요일', '지급완료']
    ),
  ];

  const showInfoChangeHandler = () => {
    setShowInfo(false);
  };
  return (
    <Box
      sx={{
        width: '1500px',
        minHeight: '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '24px !important',
        margin: '24px auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
          <CButton content="급여사항확인" fontSize="large" handleClick={showInfoChangeHandler} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid black',
            height: '700px',
          }}
        >
          <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
            <Table>
              <TableBody>
                {LeftRows[0].row.map((left, index) => (
                  <TableRow key={index}>
                    <TableCell>{left}</TableCell>
                    <TableCell>{LeftRows[0].first[index]}</TableCell>
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
                    <TableCell>{right}</TableCell>
                    <TableCell>{RightRows[0].first[index]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};
