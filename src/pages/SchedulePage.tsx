import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import removeImg from "../assets/remove.svg";
import plusImg from "../assets/plus.svg";
import "../css/schedule.css";
import { NavbarComponent } from "../сomponents/NavbarComponent";
import { DayComponent } from "../сomponents/DayComponent";

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
    return (
        <>
            <NavbarComponent
                userInfo={userInfo}
                onExit={exit}
            />
            <div className="days_wrapper">
                <DayComponent dow={0} />
                <DayComponent dow={1} />
                <DayComponent dow={2} />
                <DayComponent dow={3} />
                <DayComponent dow={4} />
                <DayComponent dow={5} />
                <DayComponent dow={6} />
            </div>
        </>
    );
}
