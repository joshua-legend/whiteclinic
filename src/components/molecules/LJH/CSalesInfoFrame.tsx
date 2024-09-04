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

  const [isComposite, toggleIsComposite] = useReducer((state) => {
    return !state;
  }, false);
  const [isRegular, toggleIsRegular] = useReducer((state) => {
    return !state;
  }, false);
  const [isDiscounted, toggleIsDiscounted] = useReducer((state) => {
    return !state;
  }, false);
  const [isModifiable, toggleIsModifiable] = useReducer((state) => {
    return !state;
  }, false);

  const cleaningItemContext = createContext(cleaningItemInfo);

  // 드롭다운 아이템 선택 시 수기입력칸 비활성화를 위한 boolean 상태변수
  const isItemSelected = !!salesData.item && salesData.item !== '선택';
  const modifySwitch = true;
  const { airconditional, washing } = useContext(cleaningItemContext);

  // 수기입력을 위해 수정버튼 클릭 시 세척금액 인풋의 readOnly 속성 false 로 스위치하는 함수
  const switchModifyState = () => {
    setSalesData((prevState) => {
      return { ...prevState, isModifiable: !modifySwitch };
    });
  };

  // 입력값 setStateAction 으로 최신화 하는 함수
  const salesInfoChangeHandler = (key: string, value: salesInfoValue | null) => {
    if (value) {
      setSalesData((prevState) => ({ ...prevState, [key]: value }));
    }
  };

  // 세척금액 자동계산 함수
  const calculateTotalPrice = (
    quantity: number,
    isComposite: boolean,
    isRegular: boolean,
    isDiscounted: boolean,
    discountRatio: string,
    // TODO : 할인율 퍼센티지 적용인지 수기입력 적용인지 피드백 필요 or 둘다 허용
    item: string
  ) => {
    if (!!quantity && !!discountRatio && !!item) {
      airconditional.map((airconItem) => {
        airconItem.label === item && isComposite
          ? setSalesData((prevState) => ({
              ...prevState,
              totalPrice: prevState.totalPrice + airconItem.compositePrice,
            }))
          : setSalesData((prevState) => ({
              ...prevState,
              totalPrice: prevState.totalPrice + airconItem.regularPrice,
            }));
      });
    }

    // 총액 계산 (수량 곱하기)
    setSalesData((prevState) => ({ ...prevState, totalPrice: prevState.totalPrice * quantity }));

    // 할인 적용( 퍼센트 기호 식별 후 삼항연산 )
    (isDiscounted && discountRatio.includes('%')) || discountRatio.startsWith('-')
      ? setSalesData((prevState) => ({
          ...prevState,
          totalPrice: prevState.totalPrice * (1 - Number(discountRatio) / 100),
        }))
      : setSalesData((prevState) => ({
          ...prevState,
          totalPrice: prevState.totalPrice - Number(discountRatio),
        }));

    return null;
  };

  useEffect(() => {
    console.log(salesData);
  }, [salesData]);

  const salesInfoTableRows = [
    writeInfoTable(
      '세척품목',
      CDropDown({
        contentList: CleaningItem,
        handleChange: (event) => salesInfoChangeHandler('item', event?.target.value),
      }),
      CInput({
        type: 'text',
        placeholderProp: '분류 불가능한 세척품목',
        labelProp: '제품명 입력',
        handleInput: (event) => salesInfoChangeHandler('writtenItem', event?.target.value),
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
        isChecked: false,
        handleChange: (event) => {
          salesInfoChangeHandler('isComposite', event?.target.checked);
          toggleIsComposite;
        },
      }),
      CCheckbox({
        label: '일반세척',
        isChecked: false,
        handleChange: (event) => {
          salesInfoChangeHandler('isRegular', event?.target.checked);
          toggleIsRegular;
        },
      })
    ),
    writeInfoTable(
      '할인여부',
      CCheckbox({
        label: '할인적용',
        isChecked: false,
        handleChange: (event) => {
          salesInfoChangeHandler('isDiscounted', event?.target.checked);
          toggleIsDiscounted;
        },
      }),
      CInput({
        labelProp: '할인율',
        placeholderProp: '할인율을 입력하세요',
        isDisabled: isDiscounted,
        type: 'text',
        handleInput: (event) => salesInfoChangeHandler('discountRatio', event?.target.value),
      })
    ),
    writeInfoTable(
      '세척금액',
      CInput({
        isModifiable: modifySwitch,
        type: 'number',
        modifyInput: toggleIsModifiable,
        placeholderProp: '할인 금액 출력',
        variableValue: salesData.totalPrice,
        adornment: '원',
        isReadOnly: isModifiable,
      })
    ),
    writeInfoTable(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (event) => salesInfoChangeHandler('comments', event?.target.value),
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
