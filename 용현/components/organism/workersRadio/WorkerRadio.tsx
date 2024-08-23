import { WORKER } from '@/app/constants/Worker';
import GenericRadioGroup from '../../molecules/radioGroup/GenericRadioGroup';

const WorkerRadioGroup = () => {
  const workerOptions = WORKER.map((worker) => ({ text: worker, value: worker }));

  return <GenericRadioGroup label="Worker" options={workerOptions} />;
};

export default WorkerRadioGroup;
