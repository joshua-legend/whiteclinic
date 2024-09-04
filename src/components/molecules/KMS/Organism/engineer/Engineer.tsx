import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { skill, skillArr } from '@/constants/definition';
import { CheckBox } from '@mui/icons-material';
import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';

import { useState } from 'react';
import { ButtonModal } from '../../Melecules/engineer/ButtonModal';
import { CModal } from '../../Melecules/engineer/CModal';

export type EngineerTableType = '기사성함' | '연락처' | '거주지역' | '가능품목' | '특이사항';

const createData = (
  row: EngineerTableType, //
  first: JSX.Element, //
  second?: JSX.Element
) => {
  return { row, first, second };
};

export const SkillCheckBoxs = () => (
  <>
    {skillArr.map((skill) => (
      <CCheckbox<skill> key={skill} label={skill} isChecked={false} />
    ))}
  </>
);

const rows = [
  createData('기사성함', CInput({ type: 'text', handleInput:})),
  createData('연락처', CInput({ type: 'text' })),
  createData('거주지역', CInput({ type: 'text' })),
  createData('가능품목', <SkillCheckBoxs />, CInput({ type: 'text' })),
  createData('특이사항', CInput({ type: 'text' })),
];

export type EngineerInfoModel ={
  name:string;
  number:string;
  address:string;
  skill : string;
  issue: string;
}

export const Engineer = () => {
  const [engineerData, setEngineerData] = useState<EngineerInfoModel>({
    name:'',
    number:'',
    address:'',
    skill:'',
    issue:'',
  });

const EngineerInfoChangeHandler = (key:string,value:string)=>{
  setEngineerData((info)=>({...info,[key]:value}))
  console.log(engineerData);
}

  const [showModal, setModal] = useState(false);


  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openInfo = () => {
    window.location.href = '/engineer/e_registration';
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.row}>
                <TableCell
                  sx={{
                    width: '100px',
                  }}
                >
                  {row.row}
                </TableCell>
                <TableCell
                  sx={
                    {
                      //
                    }
                  }
                >
                  {row.first}
                  {row.second}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonTwo
        leftButton="취소"
        leftColor="black"
        leftBgColor="gray"
        rightButton="등록"
        onRightButton={openModal}
      />
      <CModal
        title="해당 내용으로 기사정보를 등록하시겠습니까?"
        open={showModal}
        children={ButtonTwo({
          leftButton: '아니오',
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
          onLeftButton: closeModal,
          onRightButton: openInfo,
        })}
      />
    </div>
  );
};
