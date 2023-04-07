import React from "react";
import TimeInputComponent from "./TimeInputComponent";

interface TimeRangeComponentParams {
    timeRange: {
        start: string;
        end: string;
    };
    changeTime: (type: boolean, time: string) => void
}

export default function TimeRangeComponent({timeRange, changeTime}: TimeRangeComponentParams) {
    return (
        <div className="time">
            <TimeInputComponent
                value={timeRange.start}
                onChange={(event) => changeTime(false, event.target.value)}/>
            <p className="wall">:</p>
            <TimeInputComponent
                value={timeRange.end}
                onChange={(event) => changeTime(true, event.target.value)}/>
        </div>
    );
}