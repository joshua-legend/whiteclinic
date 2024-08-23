import { useState } from "react";

export const usePageState = () => {
    const [textValue, setTextValue] = useState("");
    const [dropValue, setDropValue] = useState("");
    const [checkedItems, setCheckedItems] = useState<boolean>(false);
    const [checkedItemsValue, setCheckedItemsValue] = useState<string>("");
    const [open, setOpen] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");
  
    return {
      textValue,
      setTextValue,
      dropValue,
      setDropValue,
      checkedItems,
      setCheckedItems,
      checkedItemsValue,
      setCheckedItemsValue,
      open,
      setOpen,
      confirmationMessage,
      setConfirmationMessage,
    };
  };