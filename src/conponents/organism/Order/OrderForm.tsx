import LabelDate from './LabelDate';
import LabelDrop, { dropDownListType } from './LabelDrop';
import LabeledTextInput from './LabelTypingInput';

const LabeledTextInputText = ['고객성함', '연락처', '방문주소', '특이사항'];
const LabelDropData: Record<
  string,
  { labeltext: string; droptype: dropDownListType; borderBottom?: string }
> = {
  pay: {
    labeltext: '결제방식',
    droptype: 'APayment',
  },
  evident: {
    labeltext: '증빙서류',
    droptype: 'AEvidentialDocument',
    borderBottom: '0',
  },
};

const OrderForm = () => {
  return (
    <>
      <LabelDate labeltext="예약일시" />
      {LabeledTextInputText.map((text, index) => (
        <LabeledTextInput key={index} labeltext={text} />
      ))}
      {Object.entries(LabelDropData).map(([key, item]) => (
        <LabelDrop
          key={key}
          labeltext={item.labeltext}
          droptype={item.droptype}
          borderBottom={item.borderBottom}
        />
      ))}
    </>
  );
};

export default OrderForm;
