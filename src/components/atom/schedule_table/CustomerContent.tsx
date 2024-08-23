import {
  CustomerDetailsProps,
  CustomerInfo,
} from '@/app/ui/(Bteam)atomize/schedule_table/ts/customerType';
import CalculatePrice, { CalculatePriceProps } from './CalculatePrice';
import { Box } from '@mui/material';
import ContentBox from './ContentBox';

type CustomerContentInfo = {
  customerName: string;
  customerContact: string;
  customerAddress: string;
  cleaningItem: string;
  cleaningType: string;
  modelEA: number;
  totalPrice: number;
};

type CustomerContentProps = {
  customer?: CustomerContentInfo[];
};

const CustomerContent = ({ customer }: CustomerContentProps) => {
  if (!customer) {
    return <div></div>;
  }

  return (
    <Box>
      {customer.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(
            ([key, value], idx) =>
              key !== 'totalPrice' && (
                <ContentBox key={idx} variant="body1" mainText={String(value)} subText="-" />
              )
          )}
          <CalculatePrice priceNum={item.totalPrice} />
        </div>
      ))}
    </Box>
  );
};

export default CustomerContent;
