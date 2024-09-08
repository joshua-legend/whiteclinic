import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Document } from '@/constants/Document';

const AEvidentialDocument = () => {
  const DocumentOption = Document.map((doc) => ({ text: doc, value: doc }));

  return <ADropdownBox label="선택" options={DocumentOption} width="medium" />;
};

export default AEvidentialDocument;
