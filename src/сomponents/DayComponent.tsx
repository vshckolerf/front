import plusImg from "../assets/plus.svg";
import React, {useLayoutEffect, useState} from "react";
import removeImg from "../assets/remove.svg";
import {dayFetch} from "../fetches/dayFetch";
import {setDayFetch} from "../fetches/setDayFetch";
import "../css/DayComponent.css";

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

  const changeTime = async (order: number, type: boolean, time: string) => {
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
  };
  const addLesson = async () => {
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
  };
  const removeLesson = async (order: number) => {
    await setLessons((prevState: ILesson[] | null) => {
      if (prevState == null) return [];
      const ret = prevState.filter((value, index) => index !== order);
      pushToBack(ret);
      return ret;
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
          {lessons?.map((obj: ILesson, key) => {
            return (<div className="lesson" key={key}>
              <div className="left">
                <p className="number">{key + 1}-й</p>
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
                <button
                  onClick={()=>{removeLesson(key);}}
                >
                  <img
                    className="remove"
                    src={removeImg}
                    alt="img"
                  />
                </button>
              </div>
            </div>
          </div>)
        })}
      </div>
      <div className="add">
        <button
          onClick={addLesson}
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