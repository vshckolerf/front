import plusImg from "../assets/plus.svg";
import { LessonComponent } from "./LessonComponent";
import {ILesson} from "../interfaces/ILesson";
import {ILessonParams} from "../interfaces/ILessonParams";
import React from "react";
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
    const lessons : ILesson[] = [
        {
            startHour: "10",
            startMinute:"00",
            endHour:"00",
            endMinute:"00"
        },
        {
            startHour: "10",
            startMinute:"02",
            endHour:"00",
            endMinute:"00"
        }
    ]
    const changeTime = (order:number,type:boolean,time:string)=>{
        console.log(order,type,time)
    };
    const lessonsComponents = lessons.map((obj: ILesson,key)=>{
        (obj as ILessonParams).onChangeStartTime = (time:string)=>{changeTime(key+1,false,time);}
        (obj as ILessonParams).onChangeEndTime = (time:string)=>{changeTime(key+1,true,time);};
        (obj as ILessonParams).order = key+1;
        return(LessonComponent(obj as ILessonParams))
    });
    return (
        <div
            className="day"
            id="first-day">
            <div className="day_top">
                <p className="static">Расписание</p>
                <p className="name">{weekDays[dow]}</p>
            </div>
            <div className="lessons_wrapper">
                {lessonsComponents}
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
