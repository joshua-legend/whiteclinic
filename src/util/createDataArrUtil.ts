import { SalesInfoModel, salesInfoValue } from "@/constants/definition";
import { Dispatch, SetStateAction } from "react";

export const salesInfoChangeHandler = (
  key: keyof SalesInfoModel,
  value: salesInfoValue | null,
  stateFn: Dispatch<SetStateAction<SalesInfoModel>>
) => {
  value && stateFn((prevState) => ({ ...prevState, [key]: value }));
  !!value && console.log('salesInfo parameter has no value');
};
