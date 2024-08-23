import { ListItem } from "@mui/material";
import Icon from "../atom/Icon";
import Label from "../atom/Label";
import { SectionTitleProps } from "@/util/type/molecules";

const SectionTitle = ({ iconprops, labelprops }: SectionTitleProps) => {
    return (
        <ListItem>
            <Icon {...iconprops} />
            <Label {...labelprops} />
        </ListItem>
    );
}

export default SectionTitle