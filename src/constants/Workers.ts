type DatePay = {
  date: string;
  pay: string;
};

type Worker = {
  name: string;
  datePay: DatePay[];
};

export type WorkerWageType = {
  [key: string]: Worker;
};

export const WorkerWage: WorkerWageType = {
  worker1: {
    name: '홍길동',
    datePay: [
      { date: '6월1일', pay: 100000 + '원' },
      { date: '6월2일', pay: 100000 + '원' },
      { date: '6월3일', pay: 200000 + '원' },
      { date: '6월4일', pay: 40000 + '원' },
      { date: '6월5일', pay: 0 + '원' },
      { date: '6월6일', pay: 70000 + '원' },
      { date: '6월7일', pay: 50000 + '원' },
    ],
  },
  worker2: {
    name: '김철수',
    datePay: [
      { date: '6월1일', pay: 90000 + '원' },
      { date: '6월2일', pay: 110000 + '원' },
      { date: '6월3일', pay: 110000 + '원' },
      { date: '6월4일', pay: 90000 + '원' },
      { date: '6월5일', pay: 80000 + '원' },
      { date: '6월6일', pay: 0 + '원' },
      { date: '6월7일', pay: 120000 + '원' },
    ],
  },
  worker3: {
    name: '이영희',
    datePay: [
      { date: '6월1일', pay: 80000 + '원' },
      { date: '6월2일', pay: 80000 + '원' },
      { date: '6월3일', pay: 0 + '원' },
      { date: '6월4일', pay: 150000 + '원' },
      { date: '6월5일', pay: 150000 + '원' },
      { date: '6월6일', pay: 100000 + '원' },
      { date: '6월7일', pay: 100000 + '원' },
    ],
  },
  worker4: {
    name: '박민수',
    datePay: [
      { date: '6월1일', pay: 120000 + '원' },
      { date: '6월2일', pay: 120000 + '원' },
      { date: '6월3일', pay: 120000 + '원' },
      { date: '6월4일', pay: 0 + '원' },
      { date: '6월5일', pay: 0 + '원' },
      { date: '6월6일', pay: 180000 + '원' },
      { date: '6월7일', pay: 180000 + '원' },
    ],
  },
  worker5: {
    name: '정수진',
    datePay: [
      { date: '6월1일', pay: 70000 + '원' },
      { date: '6월2일', pay: 70000 + '원' },
      { date: '6월3일', pay: 140000 + '원' },
      { date: '6월4일', pay: 140000 + '원' },
      { date: '6월5일', pay: 70000 + '원' },
      { date: '6월6일', pay: 0 + '원' },
      { date: '6월7일', pay: 210000 + '원' },
    ],
  },
  worker6: {
    name: '강지훈',
    datePay: [
      { date: '6월1일', pay: 110000 + '원' },
      { date: '6월2일', pay: 110000 + '원' },
      { date: '6월3일', pay: 110000 + '원' },
      { date: '6월4일', pay: 110000 + '원' },
      { date: '6월5일', pay: 110000 + '원' },
      { date: '6월6일', pay: 0 + '원' },
      { date: '6월7일', pay: 0 + '원' },
    ],
  },
};
