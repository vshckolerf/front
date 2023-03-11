import plusImg from "../assets/plus.svg";
import { LessonComponent } from "./LessonComponent";
interface IDayParams {
    dow: number;
}

const weekDays = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
];
export function DayComponent({ dow }: IDayParams) {
    return (
        <div
            className="day"
            id="first-day">
            <div className="day_top">
                <p className="static">Расписание</p>
                <p className="name">{weekDays[dow]}</p>
            </div>
            <div className="lessons_wrapper">
                <LessonComponent
                    startHour="10"
                    startMinute="00"
                    endHour="00"
                    endMinute="00"
                    order={1}
                />
            </div>
            <div className="add">
                <img
                    src={plusImg}
                    className="add"
                    alt="img"
                />
            </div>
        </div>
    );
}
