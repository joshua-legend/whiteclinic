'use client';

import { CheckboxGroupProps } from "@/util/type/molecules";
import LabeledInput from "./LabeledInput";
import { useState } from "react";

const CheckboxGroup = ({ labeledinputprops }: CheckboxGroupProps) => {
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newSelectedIndexes = selectedIndexes.includes(index)
            ? selectedIndexes.filter(item => item !== index) // 이미 선택된 인덱스면 제거
            : [...selectedIndexes, index]; // 선택되지 않은 인덱스면 추가

        setSelectedIndexes(newSelectedIndexes);

        // 현재 선택된 항목들을 콘솔에 출력
        const selectedLabels = newSelectedIndexes.map(i => labeledinputprops[i].labelprops.text);
        console.log('선택된 항목:', selectedLabels.join(', '));
    };

    return (
        <div>
            {labeledinputprops.map((props, index) => (
                <LabeledInput
                    key={index}
                    inputType="Checkbox"
                    labelprops={props.labelprops}
                    inputprops={{
                        checked: selectedIndexes.includes(index),
                        onChange: (e) => handleChange(e, index),
                    }}
                />
            ))}
        </div>
    );
}

export default CheckboxGroup;
