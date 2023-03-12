import { useState } from "react";
import removeImg from "../assets/remove.svg";
import {ILessonParams} from "../interfaces/ILessonParams";
export function LessonComponent(params: ILessonParams) {
    const [startTime, setStartTime] = useState(
        params.startHour + ":" + params.startMinute
    );
    const [endTime, setEndTime] = useState(
        params.endHour + ":" + params.endMinute
    );
    const changeStartTime = (value : string) =>{
        params.onChangeStartTime(value);
        setStartTime(value)
    };
    const changeEndTime = (value : string) =>{
        params.onChangeEndTime(value);
        setStartTime(value)
    };
    return (
        <div className="lesson">
            <div className="left">
                <p className="number">{params.order}-й</p>
            </div>
            <div className="right">
                <div className="time">
                    <input
                        type="time"
                        className="les_time"
                        value={startTime}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeStartTime(event.target.value)}
                    />
                    <p className="wall">:</p>
                    <input
                        type="time"
                        className="les_time"
                        value={endTime}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeEndTime(event.target.value)}
                    />
                </div>
                <div className="remove">
                    <img
                        className="remove"
                        src={removeImg}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
}
