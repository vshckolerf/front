import { useState } from "react";
import removeImg from "../assets/remove.svg";
interface ILessonParams {
    startHour: string;
    startMinute: string;
    endHour: string;
    endMinute: string;
    order: number;
}
export function LessonComponent(params: ILessonParams) {
    const [startTime, setStartTime] = useState(
        params.startHour + ":" + params.startMinute
    );
    const [endTime, setEndTime] = useState(
        params.endHour + ":" + params.endMinute
    );
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
                        onChange={(event) => setStartTime(event.target.value)}
                    />
                    <p className="wall">:</p>
                    <input
                        type="time"
                        className="les_time"
                        value={endTime}
                        onChange={(event) => setEndTime(event.target.value)}
                    />
                </div>
                <div className="remove">
                    <img
                        className="remove"
                        src={removeImg
                            alt="img"
                    />
                </div>
            </div>
        </div>
    );
}
