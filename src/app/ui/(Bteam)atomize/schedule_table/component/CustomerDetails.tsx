import { CustomerDetailsProps } from '../ts/customerType';

//고객 정보 출력 컴포넌트
const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  if (!customer) {
    return <div> </div>;
  }

  const customerPrice = customer.totalPrice;
  const priceDefine = customerPrice / 10000 + '만원';

  return (
    <div>
      {customer.customerName} - {customer.customerContact} - {customer.customerAddress} -
      {customer.cleaningType} - {customer.modelEA} - {priceDefine}
    </div>
  );
};

export default CustomerDetails;
