'use client';

import Button from '@/components/atom/Button';
import ButtonGroup from '@/components/molecules/ButtonGroup';
import CheckboxGroup from '@/components/molecules/CheckboxGroup';
import ComposedInput from '@/components/molecules/ComposedInput';
import Dropdown from '@/components/molecules/Dropdown';
import LabeledInput from '@/components/molecules/LabeledInput';
import OneCheckbox from '@/components/molecules/OneCheckbox';
import { buttonData } from '@/constants/button';
import { checkboxGroupData, oneCheckboxData } from '@/constants/checkbox';
import { AirConditionerOptions } from '@/constants/dropdown';
import { handleInputChange } from '@/util/event/handler';
import CreateIcon from '@mui/icons-material/Create';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col p-3 gap-10">
      <div>
        <Button text='등록' size='small' />
      </div>
      <div>
        <ButtonGroup buttonprops={buttonData} />
      </div>
      <div>
        <Dropdown dropdownOptions={AirConditionerOptions} />
      </div>
      <div>
        <ComposedInput
          iconprops={{ icon: <CreateIcon />, color: 'default' }}
          textinputprops={{ size: 'default', onChange: handleInputChange }}
        />
      </div>
      <div>
        <ComposedInput
          iconprops={{ icon: <CreateIcon />, color: 'default' }}
          textinputprops={{ size: 'large', onChange: handleInputChange }}
        />
      </div>
      <div>
        <LabeledInput
          inputType="Radio"
          labelprops={{ text: '할인적용', color: 'black', fontSize: 'medium' }}
          inputprops={{ checked: true }}
        />
      </div>
      <div>
        <OneCheckbox labeledinputprops={oneCheckboxData} />
      </div>
      <div>
        <CheckboxGroup labeledinputprops={checkboxGroupData} />
      </div>
    </main>
  );
};

export default Home;
