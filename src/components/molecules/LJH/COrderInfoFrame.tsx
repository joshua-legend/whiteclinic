import { StyledCompTableCell, StyledTextTableCell } from '@/styles/customize';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import CCheckbox from '@/components/atom/CCheckbox';
import CDatePicker from '@/components/atom/CDatePicker';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { Documents, OrderInfoTableRowTextType, paymentOptions } from '@/constants/definition';
import { ComponentProps, useState } from 'react';

/**
 * @returns 주문정보 입력 테이블 컴포넌트
 */
const OrderInfoTableFrame = () => {
  const [customerName, setCustomerName] = useState('');

  const handleChange: ComponentProps<'input'>['onChange'] = (e) => {
    setCustomerName(e.target.value);
  };

  /**
   * @param tableRow 테이블 첫번째 셀 텍스트 파라미터, 유니온으로 타입지정 되어있음
   * @param components 렌더링할 컴포넌트 파라미터, 각 tableRow에 맞게 호출하여 사용
   * @param subComponents 각 줄에 컴포넌트가 두 개 이상 존재할 시 사용할 컴포넌트 파라미터 -> ex) 체크박스
   * @description //TODO: atom 컴포넌트로 분리 어떻게 할지 고려중...
   */
  const writeOrderInfoTable = (
    tableRow: OrderInfoTableRowTextType,
    components: JSX.Element,
    subComponents?: JSX.Element
  ) => {
    return { tableRow, components, subComponents };
  };

  /**
   * 주문정보 테이블 셀 배열 (텍스트셀, 컴포넌트, Optional 서브컴포넌트(체크박스))
   */
  const orderInfoTableRows = [
    writeOrderInfoTable('예약일시', CDatePicker({ label: '일정 선택' })),
    writeOrderInfoTable(
      '고객성함',
      CInput({
        inputID: 'nameInput',
        labelProp: '고객 성함',
        type: 'text',
        isRequired: true,
        placeholderProp: '이름을 입력하세요',
        handleInput: (e) => handleChange(e),
      })
    ),
    writeOrderInfoTable(
      '연락처',
      CInput({
        labelProp: '고객 연락처',
        type: 'number',
        isRequired: true,
        placeholderProp: '`-` 를 제외하고 입력하세요',
      })
    ),
    writeOrderInfoTable(
      '방문주소',
      CInput({
        labelProp: '고객 주소지',
        type: 'text',
        isRequired: true,
        placeholderProp: '상세 주소를 입력하세요',
      })
    ),
    writeOrderInfoTable(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        type: 'text',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
      })
    ),
    writeOrderInfoTable('결제방식', CDropDown({ contentList: paymentOptions })),
    writeOrderInfoTable(
      '증빙서류',
      CDropDown({ contentList: Documents }),
      CCheckbox({ label: '발행완료', isChecked: false })
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {orderInfoTableRows.map((row) => (
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

export default OrderInfoTableFrame;
