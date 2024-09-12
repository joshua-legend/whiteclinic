import { CustomerInfo, CustomerInfoProps } from '@/constants/definition';
import { Dayjs } from 'dayjs';

//엔지니어와 주문 정보를 매칭함
export const filterOrdersForEngineer = (
  orders: CustomerInfo[] | undefined,
  engineerName: string,
  date: string
) => {
  return orders?.filter(
    (order) => order.assignedEngineer === engineerName && order.appointmentDate === date
  );
};

export const priceRender = (customer: CustomerInfo) => {
  const cPrice = customer.totalPrice;
  const customerPrice = cPrice > 10000;
  return customerPrice ? cPrice / 10000 + '만원' : cPrice + '원';
};

export const formattedDate = (selectDate: Dayjs | null) => {
  return selectDate ? selectDate.format('YYYY-MM-DD') : '';
};
