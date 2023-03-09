import removeImg from "../assets/remove.svg";
import plusImg from "../assets/plus.svg";
interface IDayParams {
    dow: string;
}
export function DayComponent({ dow }: IDayParams) {
    return (
        <div
            className="day"
            id="first-day">
            <div className="day_top">
                <p className="static">Расписание</p>
                <p className="name">{dow}</p>
            </div>
            <div className="lessons_wrapper">
                <div className="lesson">
                    <div className="left">
                        <p className="number">1-й</p>
                    </div>
                    <div className="right">
                        <div className="time">
                            <input
                                type="time"
                                className="les_time"
                            />
                            <p className="wall">:</p>
                            <input
                                type="time"
                                className="les_time"
                            />
                        </div>
                        <div className="remove">
                            <img
                                className="remove"
                                src={removeImg}
                            />
                        </div>
                    </div>
                </div>
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
