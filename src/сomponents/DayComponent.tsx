import plusImg from "../assets/plus.svg";
import React, {useEffect, useRef, useState} from "react";
import removeImg from "../assets/remove.svg";
import {dayFetch} from "../fetches/dayFetch";
import { setDay } from "../fetches/setDay";
interface IDayParams {
    dow: number;
}
interface ILesson {
    start: string;
    end: string;
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
    const [lessons, setLessons] = useState<ILesson[] | null>([]);
    const isInitialMount = useRef(true);
    useEffect(() => {
        dayFetch(dow)
            .then((lessons: ILesson[]) => {
                setLessons(lessons);
            }, (resp) => {
                console.log("err" + dow, resp);
            });
    }, []);
    useEffect(() => {
        console.log("Сработка useEffect dow:" + dow)
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setDay(dow,lessons, localStorage.getItem("jwt") as string)
                .then((resp:string) => {
                    console.log("sus" + dow, resp);
                }, (resp:string) => {
                    console.log("err" + dow, resp);
                });
        }

    }, [lessons]);
    const changeTime = (order: number, type: boolean, time: string) => {
        setLessons((prevState: ILesson[] | null) => {
            if (prevState == null) return [];
            return prevState.map((v, k) => {
                if (k == order) {
                    if (type) {
                        return {...v, end: time}
                    } else {
                        return {...v, start: time}
                    }
                }else{
                    return v;
                }
            });
        });
        console.log(lessons);
    };
    const addLesson = ()=>{
        setLessons((prevState: ILesson[] | null) => {
            if(prevState == null) return [{
                start: "10:00",
                end:"11:00",
            }];
            return [...prevState,{
                start: "10:00",
                end:"11:00",
            }];
        });
        console.log(lessons);
    };
    const removeLesson = (order:number)=>{
        setLessons((prevState: ILesson[] | null) => {
            if(prevState == null) return [];
            return prevState.filter((value, index) => index !== order);
        });
        console.log(lessons);
    };
    return (
        <div
            className="day"
            id="first-day">
            <div className="day_top">
                <p className="static">Расписание</p>
                <p className="name">{weekDays[dow]}</p>
            </div>
            <div className="lessons_wrapper">
                {lessons?.map((obj: ILesson,key)=>{
                    return(<div className="lesson" key={key}>
                        <div className="left">
                            <p className="number">{key+1}-й</p>
                        </div>
                        <div className="right">
                            <div className="time">
                                <input
                                    type="time"
                                    className="les_time"
                                    value={lessons[key].start}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeTime(key,false,event.target.value)}
                                />
                                <p className="wall">:</p>
                                <input
                                    type="time"
                                    className="les_time"
                                    value={lessons[key].end}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeTime(key,true,event.target.value)}
                                />
                            </div>
                            <div className="remove">
                                <img
                                    className="remove"
                                    src={removeImg}
                                    alt="img"
                                    onClick={()=>{removeLesson(key);}}
                                />
                            </div>
                        </div>
                    </div>)
                })}
            </div>
            <div className="add">
                <img
                    src={plusImg}
                    className="add"
                    alt="img"
                    onClick={addLesson}
                />
            </div>
        </div>
    );
}
