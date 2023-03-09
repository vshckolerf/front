import plusImg from "../assets/plus.svg";
import { LessonComponent } from "./LessonComponent";
interface IDayParams {
    dow: number;
}
export function DayComponent({ dow }: IDayParams) {
    const weekDays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ];
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
                    startHour="00"
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
                />
            </div>
        </div>
    );
}
