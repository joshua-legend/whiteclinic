import { LabeledInputProps } from '@/util/type/molecules';

export const oneCheckboxData: Omit<LabeledInputProps, 'inputType'>[] = [
  {
    labelprops: { text: '종합세척', color: 'black', fontSize: 'medium' },
    inputprops: { checked: false, onChange: () => {} },
  },
  {
    labelprops: { text: '일반세척', color: 'black', fontSize: 'medium' },
    inputprops: { checked: false, onChange: () => {} },
  },
];

export const checkboxGroupData: Omit<LabeledInputProps, 'inputType'>[] = [
    {
      labelprops: { text: '벽걸이', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '원웨이', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '포웨이', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '원형', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '스탠드', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '실외기', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '덕트', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '창문형', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '통돌이', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '드럼', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '빌트인', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
    {
      labelprops: { text: '건조기', color: 'black', fontSize: 'medium' },
      inputprops: { checked: false, onChange: () => {} },
    },
  ];
