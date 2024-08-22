//고객 정보
export type CustomerInfo = {
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

//위 고객 정보를 하나로 정의 - 편의를 위했지만 필요없을시 삭제 예정
export type CustomerDetailsProps = {
  customer?: CustomerInfo;
};

//시간대와 고객 예약시간을 매핑하기 위한 type
export type CustomerTimeSlotProps = {
  timeSlot: string;
  customer?: CustomerInfo;
};

//기사의 시간대와 고객 예약 시간을 list해서 보여주기 위함
export type CustomerTimeSlotListProps = {
  engineerDate: string;
  orderInfo?: CustomerInfo[];
};

//최종 결합 파일에서 사용함
export type EngineerContentProps = {
  engineerName: string;
  engineerDate: string;
  orderInfo?: CustomerInfo[];
};

export type TitleHeaderProps = {
  content: string;
};
