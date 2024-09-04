import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { CNumberInput } from '@/components/atom/CNumberInput';
import { CleaningItem, SalesInfoModel, salesInfoValue } from '@/constants/definition';
import { cleaningItemInfo } from '@/constants/productTable';
import { StyledCompTableCell, StyledTextTableCell } from '@/styles/customize';
import { writeInfoTable } from '@/util/actionUtil';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { createContext, useContext, useEffect, useReducer, useState } from 'react';

/**
 * @returns 매출정보 입력 테이블 컴포넌트
 */
const SalesInfoFrame = () => {
  const [salesData, setSalesData] = useState<SalesInfoModel>({
    item: '',
    writtenItem: '',
    itemQuantity: 0,
    isComposite: false,
    isRegular: false,
    isDiscounted: false,
    isModifiable: false,
    discountRatio: '',
    totalPrice: 0,
    comments: '',
  });

  const [isComposite, toggleComposite] = useReducer((state) => !state, salesData.isComposite);
  const [isRegular, toggleRegular] = useReducer((state) => !state, salesData.isRegular);
  const [isDiscounted, toggleDiscounted] = useReducer((state) => !state, salesData.isDiscounted);

  const cleaningItemContext = createContext(cleaningItemInfo);

  // 드롭다운 아이템 선택 시 수기입력칸 비활성화를 위한 boolean 상태변수
  const isItemSelected = !!salesData.item && salesData.item !== '선택';
  const modifySwitch = true;
  const { airconditional, washing } = useContext(cleaningItemContext);

  // 수기입력을 위해 수정버튼 클릭 시 세척금액 인풋의 readOnly 속성 false 로 스위치하는 함수

  // 입력값 setStateAction 으로 최신화 하는 함수
  const salesInfoChangeHandler = (key: string, value: salesInfoValue | null) => {
    if (value) {
      setSalesData((prevState) => ({ ...prevState, [key]: value }));
    }
  };

  useEffect(() => {
    console.log(salesData);
  }, [salesData]);

  const salesInfoTableRows = [
    writeInfoTable(
      '세척품목',
      CDropDown({
        contentList: CleaningItem,
        handleChange: (event) => salesInfoChangeHandler('item', event.target.value),
      }),
      CInput({
        type: 'text',
        placeholderProp: '분류 불가능한 세척품목',
        labelProp: '제품명 입력',
        handleInput: (event) => salesInfoChangeHandler('writtenItem', event.target.value),
        isDisabled: isItemSelected,
      })
    ),
    writeInfoTable(
      '세척대수',
      CNumberInput({
        handleChange: (event, value) => salesInfoChangeHandler('itemQuantity', value),
      })
    ),
    writeInfoTable(
      '세척방식',
      CCheckbox({
        label: '종합세척',
        isChecked: salesData.isComposite,
        handleChange: (event) => {
          salesInfoChangeHandler('isComposite', event.target.checked);
          toggleComposite;
        },
      }),
      CCheckbox({
        label: '일반세척',
        isChecked: salesData.isRegular,
        handleChange: (event) => {
          salesInfoChangeHandler('isRegular', event.target.checked);
        },
      })
    ),
    writeInfoTable(
      '할인여부',
      CCheckbox({
        label: '할인적용',
        isChecked: salesData.isDiscounted,
        handleChange: (event) => {
          salesInfoChangeHandler('isDiscounted', event.target.checked);
        },
      }),
      CInput({
        labelProp: '할인율',
        placeholderProp: '할인율을 입력하세요',
        isDisabled: !salesData.isDiscounted,
        type: 'text',
        handleInput: (event) => salesInfoChangeHandler('discountRatio', event.target.value),
      })
    ),
    writeInfoTable(
      '세척금액',
      CInput({
        isModifiable: modifySwitch,
        type: 'number',
        modifyInput: () => {
          setSalesData((prevState) => ({ ...prevState, isModifiable: !salesData.isModifiable }));
        },
        placeholderProp: '할인 금액 출력',
        variableValue: salesData.totalPrice,
        adornment: '원',
        isReadOnly: !salesData.isModifiable,
      })
    ),
    writeInfoTable(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (event) => salesInfoChangeHandler('comments', event.target.value),
      })
    ),
  ];

  return (
    <TableContainer sx={{ overflow: 'hidden' }}>
      <Table>
        <TableBody>
          {salesInfoTableRows.map((row) => (
            <TableRow key={row?.tableRow}>
              <TableCell sx={{ ...StyledTextTableCell }}>{row?.tableRow}</TableCell>
              <TableCell sx={{ ...StyledCompTableCell }}>
                {row?.components} {row?.subComponents}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesInfoFrame;
