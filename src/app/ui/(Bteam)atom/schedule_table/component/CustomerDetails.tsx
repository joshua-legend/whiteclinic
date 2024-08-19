import { CustomerDetailsProps } from '../ts/customerType';

//고객 정보 출력 컴포넌트
const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  if (!customer) {
    return <div> </div>;
  }

  return (
    <div>
      {customer.customerName} - {customer.customerContact} - {customer.customerAddress} -
      {customer.cleaningType} - {customer.modelEA} - {customer.totalPrice}
    </div>
  );
};

export default CustomerDetails;
