import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import LabelInput from '../template/LabelInput/BookingDate';
import WorkerName from '../template/LabelTextFeild/WorkerName';

function createData(date: string, wage: number) {
  return { date, wage };
}

const rows = [
  createData('6월3일', 100000),
  createData('6월4일', 100000),
  createData('6월5일', 0),
  createData('6월6일', 0),
  createData('6월7일', 0),
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300, maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell align="right">금액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.wage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
      </div>
    </TableContainer>
  );
};

export default BasicTable;
