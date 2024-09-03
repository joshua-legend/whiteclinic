import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { CNumberInput } from '@/components/atom/CNumberInput';
import { CleaningItem } from '@/constants/definition';
import { StyledCompTableCell, StyledTextTableCell } from '@/styles/customize';
import { writeInfoTable } from '@/util/actionUtil';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

/**
 * @returns 매출정보 입력 테이블 컴포넌트
 */
const SalesInfoFrame = () => {
  const salesInfoTableRows = [
    writeInfoTable(
      '세척품목',
      CDropDown({ contentList: CleaningItem }),
      CInput({ type: 'text', placeholderProp: '분류 불가능한 세척품목', labelProp: '제품명 입력' })
    ),
    writeInfoTable(
      '세척대수',
      CNumberInput({
        handleChange() {
          console.log('Quantity updated');
        },
      })
    ),
    writeInfoTable(
      '세척방식',
      CCheckbox({ label: '종합세척', isChecked: false }),
      CCheckbox({ label: '일반세척', isChecked: false })
    ),
    writeInfoTable(
      '할인여부',
      CCheckbox({ label: '할인적용', isChecked: false }),
      CInput({ labelProp: '할인율', placeholderProp: '할인율을 입력하세요', type: 'text' })
    ),
    writeInfoTable(
      '세척금액',
      CInput({
        placeholderProp: '할인 금액 출력',
        variableValue: '할인금액',
        adornment: '원',
        isReadOnly: true,
      })
    ),
    writeInfoTable(
      '특이사항',
      CInput({ labelProp: '특이사항', placeholderProp: '특이사항이 있을 시 기입하세요.' })
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
