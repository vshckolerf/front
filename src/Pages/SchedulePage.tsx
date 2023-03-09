import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { IUser } from "../Interfaces/IUser";
import removeImg from "../assets/remove.svg";
import plusImg from "../assets/plus.svg";
import "../css/schedule.css";
import { NavbarComponent } from "../Components/NavbarComponent";
import { DayComponent } from "../Components/DayComponent";

export function SchedulePage() {
    const navigate = useNavigate();
    const exit = () => {
        localStorage.removeItem("jwt");
        navigate("/");
    };
    const { decodedToken, isExpired } = useJwt<IUser>(
        localStorage.getItem("jwt") as string
    );
    if (isExpired) exit();
    const userInfo = decodedToken;
    console.log(decodedToken, isExpired);
    console.log(userInfo);
    return (
        <>
            <NavbarComponent
                userInfo={userInfo}
                onExit={exit}
            />
            <div className="days_wrapper">
                <DayComponent dow="Понедельник" />
                <DayComponent dow="Вторник" />
                <DayComponent dow="Среда" />
                <DayComponent dow="Четверг" />
                <DayComponent dow="Пятница" />
                <DayComponent dow="Суббота" />
                <DayComponent dow="Воскресенье" />
            </div>
        </>
    );
}
