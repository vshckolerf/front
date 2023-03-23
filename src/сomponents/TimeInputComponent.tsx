import React from "react";

interface TimeInputComponentParams {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function TimeInputComponent({value, onChange}: TimeInputComponentParams) {
    return (
        <input
            type="time"
            className="les_time"
            value={value}
            onChange={onChange}
        />
    );
}