import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import { workTimeLine } from './workTimeLine';

//typescript 환경에서 mui Typography varient 추가할때 필수 입력해야함
declare module '@mui/material/styles' {
  interface TypographyVariants {
    namebox: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    namebox?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    namebox: true;
  }
}

type customerInfo = {
  customerName: string;
  customerContact: string;
  customerAddress: string;
  cleaningItem: string;
  cleaningType: string;
  modelEA: number;
  totalPrice: number;
  appointmentDate: string;
  appointmentTime: string;
};

type CustomerDetailsProps = {
  customer?: customerInfo;
};

type CustomerTimeSlotProps = {
  timeSlot: string;
  customer?: customerInfo;
};

type EngineerContentProps = {
  engineerName: string;
  engineerDate: string;
  orderInfo?: customerInfo[];
};

const theme = createTheme({
  typography: {
    namebox: {
      fontSize: '32px',
      fontWeight: 800,
    },
  },
});

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

// 시간대에 맞는 고객 정보를 매핑하는 컴포넌트
const CustomerTimeSlot = ({ timeSlot, customer }: CustomerTimeSlotProps) => {
  return (
    <Box sx={{ display: 'flex', gap: '0.875rem' }}>
      <Box sx={{ width: '100px', height: '30px', padding: '3px', textAlign: 'center' }}>
        <Typography variant="subtitle1" component="span">
          {timeSlot}
        </Typography>
      </Box>

      <CustomerDetails customer={customer} />
    </Box>
  );
};

const EngineerContent = ({ engineerName, engineerDate, orderInfo }: EngineerContentProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#66b2ff' : '#007fff'),
            color: (theme) => (theme.palette.mode === 'dark' ? '#1C2025' : '#fff'),
            borderRadius: '8px',
            textAlign: 'center',
            width: '1000px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="namebox" noWrap>
            {engineerName} 기사
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {workTimeLine && workTimeLine.length > 0 ? (
            workTimeLine.map((timeSlot, index) => {
              const customer = orderInfo?.find(
                (order) =>
                  order.appointmentTime === timeSlot.label && order.appointmentDate === engineerDate
              );
              return <CustomerTimeSlot key={index} timeSlot={timeSlot.label} customer={customer} />;
            })
          ) : (
            <Typography variant="body1" sx={{ color: '#ffffff' }}>
              정보 없음.
            </Typography>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EngineerContent;
