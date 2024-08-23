import { CustomButtonProps } from "@/util/type/ButtonType";
import { Button } from "@mui/material";



const CustomButton = ({ variant, text, onClick}: CustomButtonProps) => {

  return  <Button 
  variant={variant}
  onClick={onClick} 
>
  {text}
</Button>
;
}
  
  export default CustomButton;