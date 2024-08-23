"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { YearMonthDay } from "@/app/constants/dropDownMenuData";
import { DropDownBoxProps } from "@/app/util/dropdownType";

const DropDownBox = ({ type }: DropDownBoxProps) => {
  const [menu, setMenu] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setMenu(event.target.value);
  };

  const selectedData = YearMonthDay.find((item) => item.dropname === type);

  if (!selectedData) {
    return null;
  }
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="select-label" size="small">
          {selectedData.dropname}
        </InputLabel>
        <Select
          labelId="select-label"
          id="select-menu"
          value={menu}
          label={selectedData.dropname}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          {selectedData.value.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownBox;
