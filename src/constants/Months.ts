export const Months: string[] = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

export const monthTextWithvalue = Months.map((month) => ({ text: month, value: month }));
// export const Months = [
//   '1월',
//   '2월',
//   '3월',
//   '4월',
//   '5월',
//   '6월',
//   '7월',
//   '8월',
//   '9월',
//   '10월',
//   '11월',
//   '12월',
// ];
