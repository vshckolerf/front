import plusImg from "../assets/plus.svg";
import React, {useState} from "react";
import removeImg from "../assets/remove.svg";
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
    const [lessons,setLessons] =  useState<ILesson[]|null>([
        {
            start: "10:00",
            end:"11:00",
        },
        {
            start: "12:10",
            end:"12:30",
        }
    ]);
    const changeTime = (order:number,type:boolean,time:string)=>{
        // let temp = lessons;
        // if(type){
        //     temp[order].end = time;
        // }else{
        //     temp[order].start = time;
        // }
        setLessons((prevState: ILesson[] | null) => {
            if(prevState == null) return [];
            if(type){
                prevState[order].end = time;
            }else{
                prevState[order].start = time;
            }
            return prevState;
        });
        console.log(order,type,time)
    };
    const addLesson = ()=>{
    }
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
                    onClick={()=>{console.log("ss");}}
                />
            </div>
        </div>
    );
}
