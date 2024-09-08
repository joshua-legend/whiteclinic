export const timeSlots = [
  '8시 이전',
  '8시 ~ 9시',
  '9시 ~ 10시',
  '10시 ~ 11시',
  '11시 ~ 12시',
  '12시 ~ 13시',
  '13시 ~ 14시',
  '14시 ~ 15시',
  '15시 ~ 16시',
  '16시 ~ 17시',
  '17시 ~ 18시',
  '18시 ~ 19시',
  '19시 이후',
] as const;

export type TimeSlot = (typeof timeSlots)[number];
