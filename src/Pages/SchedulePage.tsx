import { useJwt } from "react-jwt";
import logoImg from "../assets/logo.svg";
import removeImg from "../assets/remove.svg";
import plusImg from "../assets/remove.svg";
import "../css/schedule.css";

export function SchedulePage() {
    const fio = "FFF";
    const { decodedToken, isExpired } = useJwt(
        localStorage.getItem("jwt") as string
    );
    console.log(decodedToken, isExpired);
    const userInfo = decodedToken;
    console.log(userInfo);
    return (
        <>
            <div className="nav_wrapper">
                <div className="left_nav">
                    <img
                        src={logoImg}
                        alt=""
                        id="nav_logo"
                    />
                    <nav>
                        <ul>
                            <li className="nav_item active">Расписание</li>
                            <li className="nav_item">Объявления</li>
                            <li className="nav_item">Пользователи</li>
                            <li className="nav_item">Файл</li>
                        </ul>
                    </nav>
                </div>
                <div className="right_nav">
                    <p className="name">{userInfo.fio}</p>
                    /* 'userInfo' is of type 'unknown'.ts(18046)*/
                    <button id="exit">Выйти</button>
                </div>
            </div>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
                                    <svg>
                                        <img
                                            className="add"
                                            src={removeImg}
                                        />
                                    </svg>
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
