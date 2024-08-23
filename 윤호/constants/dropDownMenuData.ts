export const YearMonthDay = [
  {
    dropname: "월",
    value: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  {
    dropname: "30일",
    value: Array.from({ length: 30 }, (_, i) => i + 1),
  },
  {
    dropname: "31일",
    value: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    dropname: "결제방식",
    value: ["계좌이체", "카드결제", "숨고페이", "현장현금결제"],
  },
  {
    dropname: "증빙서류",
    value: ["간이영수증", "세금계산서", "현금영수증", "카드영수증", "필요없음"],
  },
];
