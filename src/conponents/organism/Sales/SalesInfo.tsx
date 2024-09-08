'use client';

import ButtonGroup from "@/conponents/molecules/SalesForm/ButtonGroup";
import SalesInfoForm from "@/conponents/molecules/SalesForm/SalesInfoForm";
import { salesButtonData } from "@/constants/salesData";
import { salesInfoFormData } from "@/constants/salesInfoFromData";
import { Box } from "@mui/material";

const SalesInfo = () => {
    return (
        <Box>
            <SalesInfoForm titledformcontrolprops={salesInfoFormData} />
            <ButtonGroup abuttonprops={salesButtonData} />
        </Box>
    );
}

export default SalesInfo;