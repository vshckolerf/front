import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import IUser from "../../interfaces/IUser";

import "./Navbar.css";

interface INavbarParams {
    userInfo: IUser | null;
}

export default function Navbar({ userInfo }: INavbarParams) {
    const navigate = useNavigate();
    const exit = () => {
        localStorage.removeItem("jwt");
        navigate("/");
    };
    return (
        <div className="nav_wrapper">
            <div className="left_nav">
                <img src={logoImg} alt="" id="nav_logo" />
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/schedule"
                                className={({ isActive }) => (isActive ? "nav_item nav_item_active" : "nav_item")}
                            >
                                Расписание
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/announcement"
                                className={({ isActive }) => (isActive ? "nav_item nav_item_active" : "nav_item")}
                            >
                                Объявления
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "nav_item nav_item_active" : "nav_item")}
                            >
                                Пользователи
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "nav_item nav_item_active" : "nav_item")}
                            >
                                Файл
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right_nav">
                <p className="name">{userInfo?.fullName}</p>
                <button id="exit" onClick={exit}>
                    Выйти
                </button>
            </div>
        </div>
    );
}

