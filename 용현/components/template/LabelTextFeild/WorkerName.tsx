import Label from '../../atom/label/Label';
import GenericTextField from '../../atom/input/GenericTextField';
import { ChangeEvent, useState } from 'react';

const WorkerName = () => {
  const [change, setChange] = useState('');

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setChange(newValue);
    console.log(newValue);
  };

  return (
    <div className="flex items-center">
      <Label text="기사성함" color="black" />
      <GenericTextField label="직접입력" onChange={inputChange} />
    </div>
  );
};

export default WorkerName;
