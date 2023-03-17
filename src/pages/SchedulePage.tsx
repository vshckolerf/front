import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import removeImg from "../assets/remove.svg";
import plusImg from "../assets/plus.svg";
import "../css/schedule.css";
import { NavbarComponent } from "../сomponents/NavbarComponent";
import { DayComponent } from "../сomponents/DayComponent";
import {useEffect, useRef} from "react";
export function useHorizontalScroll() {
    const elRef = useRef<null | HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY*3,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}
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
    const scrollRef = useHorizontalScroll();
    return (
        <>
            <NavbarComponent
                userInfo={userInfo}
                onExit={exit}
            />
            <div className="days_wrapper" ref={scrollRef} style={{overflow: "auto" }}>
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
