import plusImg from "../assets/plus.svg";
import React, {useLayoutEffect, useState} from "react";
import {dayFetch} from "../fetches/dayFetch";
import {setDayFetch} from "../fetches/setDayFetch";
import "../css/DayComponent.css";
import {LessonComponent} from "./LessonComponent";
import {ILesson} from "../interfaces/ILesson";


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

export function DayComponent({dow}: IDayParams) {
    const [lessons, setLessons] = useState<ILesson[] | null>([]);
    useLayoutEffect(() => {
        dayFetch(dow)
            .then((lessons: ILesson[]) => {
                setLessons(lessons);
            }, (resp) => {
                console.log("err" + dow, resp);
            });
    }, []);
    const pushToBack = async (less: ILesson[]) => {
        setDayFetch(dow, less, localStorage.getItem("jwt") as string)
            .then((resp: string) => {
                console.log("sus" + dow, resp);
            }, (resp: string) => {
                console.log("err" + dow, resp);
            });
    }
    //useEffect(pushToBack, [lessons]);
    const timeManage = {
        set: async (order: number, type: boolean, time: string) => {
            await setLessons((prevState: ILesson[] | null) => {
                if (prevState == null) return [];
                const ret = prevState.map((v, k) => {
                    if (k == order) {
                        if (type) {
                            return {...v, end: time}
                        } else {
                            return {...v, start: time}
                        }
                    } else {
                        return v;
                    }
                });
                pushToBack(ret);
                return ret;
            });
            console.log(lessons);
        },
        add: async () => {
            await setLessons((prevState: ILesson[] | null) => {
                if (prevState == null) return [{
                    start: "10:00",
                    end: "11:00",
                }];
                const ret = [...prevState, {
                    start: "10:00",
                    end: "11:00",
                }];
                pushToBack(ret);
                return ret;
            });
            console.log(lessons);
        },
        remove: async (order: number) => {
            await setLessons((prevState: ILesson[] | null) => {
                if (prevState == null) return [];
                const ret = prevState.filter((value, index) => index !== order);
                pushToBack(ret);
                return ret;
            });
            console.log(lessons);
        }
    }

    return (
        <div className="day">
            <div className="day_top">
                <p className="static">Расписание</p>
                <p className="name">{weekDays[dow]}</p>
            </div>
            <div className="lessons_wrapper">
                {lessons?.map((obj: ILesson, key) => {
                    return (<LessonComponent lesson={obj} key={key} index={key} timeManage={timeManage}/>);
                })}
            </div>
            <div className="add">
                <button
                    onClick={timeManage.add}
                >
                    <img
                        src={plusImg}
                        className="add"
                        alt="img"
                    />
                </button>
            </div>
        </div>
    );
}