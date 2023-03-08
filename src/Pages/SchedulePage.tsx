import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { IUser } from "../Interfaces/IUser";
import removeImg from "../assets/remove.svg";
import plusImg from "../assets/plus.svg";
import "../css/schedule.css";
import { NavbarComponent } from "../Components/NavbarComponent";

export function SchedulePage() {
    const navigate = useNavigate();
    const { decodedToken, isExpired } = useJwt<IUser>(
        localStorage.getItem("jwt") as string
    );
    if (isExpired) {
        localStorage.removeItem("jwt");
        navigate("/schedule");
    }
    const userInfo = decodedToken;
    console.log(decodedToken, isExpired);
    console.log(userInfo);
    return (
        <>
            <NavbarComponent userInfo={userInfo} />
            <div className="days_wrapper">
                <div
                    className="day"
                    id="first-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Понедельник</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
                <div
                    className="day"
                    id="second-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Вторник</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
                <div
                    className="day"
                    id="third-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Среда</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
                <div
                    className="day"
                    id="fourth-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Четверг</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
                <div
                    className="day"
                    id="fiveth-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Пятница</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
                <div
                    className="day"
                    id="sixth-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Суббота</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
                <div
                    className="day"
                    id="seventh-day">
                    <div className="day_top">
                        <p className="static">Расписание</p>
                        <p className="name">Воскресенье</p>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
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
                                        className="add"
                                        src={removeImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add">
                        <img
                            src={plusImg}
                            className="remove"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
