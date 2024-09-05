import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { skill, skillArr } from '@/constants/definition';

import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';
import { CModal } from '../../Melecules/engineer/CModal';
import { useState } from 'react';

export type EngineerTableType = '기사성함' | '연락처' | '거주지역' | '가능품목' | '특이사항';

const createData = (
  row: EngineerTableType, //
  first: JSX.Element, //
  second?: JSX.Element
) => {
  return { row, first, second };
};

// 엔지니어 상태 객체로 관리
type EngineerInfoModel = {
  name: string;
  number: string;
  address: string;
  addskill: string;
  issue: string;
};

// 상태의 기본값을 지정해줌
export const Engineer = () => {
  const [showModal, setModal] = useState(false);
  const [checkBoxState, setCheckBoxState] = useState<boolean[]>(Array(12).fill(false));
  const [engineerData, setEngineerData] = useState<EngineerInfoModel>({
    name: '',
    number: '',
    address: '',
    addskill: '',
    issue: '',
  });

  //인풋 상태관리
  const EngineerInfoChangeHandler = (key: keyof EngineerInfoModel, value: string) => {
    setEngineerData((prev) => ({ ...prev, [key]: value }));
    console.log(engineerData);
  };

  //체크박스 상태관리 함수
  const toggle = (index: number) => {
    setCheckBoxState((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      console.log(prev, index);
      return newState;
    });
  };

  const test = () => {
    setCheckBoxState((prev)=>{
      
      return prev
    })
  };

  //체크박스 뿌려주기
  const SkillCheckBoxs = () => {
    return (
      <>
        {skillArr.map((skill, index) => (
          <CCheckbox
            key={index}
            label={skill}
            isChecked={checkBoxState[index]}
            handleChange={() => toggle(index)}
          />
        ))}
      </>
    );
  };

  const rows = [
    createData(
      '기사성함',
      CInput({
        labelProp: '기사 성함',
        type: 'text',
        placeholderProp: '이름을 입력하세요',
        handleInput: (e) => {
          EngineerInfoChangeHandler('name', e.target.value);
        },
      })
    ),
    createData(
      '연락처',
      CInput({
        labelProp: '기사 연락처',
        type: 'text',
        placeholderProp: '`-` 를 제외하고 입력하세요',
        handleInput: (e) => {
          EngineerInfoChangeHandler('number', e.target.value);
        },
      })
    ),
    createData(
      '거주지역',
      CInput({
        labelProp: '기사 주소지',
        type: 'text',
        placeholderProp: '상세 주소를 입력하세요',
        handleInput: (e) => {
          EngineerInfoChangeHandler('address', e.target.value);
        },
      })
    ),
    createData(
      '가능품목',
      <SkillCheckBoxs />,
      CInput({
        labelProp: '제품명 입력',
        type: 'text',
        placeholderProp: '제품명 직접입력',
        handleInput: (e) => EngineerInfoChangeHandler('addskill', e.target.value),
      })
    ),
    createData(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        type: 'text',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (e) => EngineerInfoChangeHandler('issue', e.target.value),
      })
    ),
  ];

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
        onRightButton={() => setModal(true)}
      />
      <CModal
        title="해당 내용으로 기사정보를 등록하시겠습니까?"
        open={showModal}
        children={ButtonTwo({
          leftButton: '아니오',
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
          onLeftButton: () => setModal(false),
          onRightButton: openInfo,
        })}
      />
    </div>
  );
};
