import React, { useLayoutEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import logoImg from "../assets/logo.svg";
import navbarLinksFetch, { INavbarLink } from "../fetches/navbarLinksFetch";
import IUser from "../interfaces/IUser";

interface INavbarParams {
    userInfo: IUser | null;
}

export default function NavbarComponent({userInfo}: INavbarParams) {
    const [links, setLinks] = useState<INavbarLink[]>([]);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        navbarLinksFetch()
            .then((links: INavbarLink[]) => setLinks(links), console.error);
    }, []);
    const exit = () => {
        localStorage.removeItem("jwt");
        navigate("/");
    };
    return (
        <div className="nav_wrapper">
            <div className="left_nav">
                <img
                    src={logoImg}
                    alt=""
                    id="nav_logo"
                />
                <nav>
                    <ul>
                        {links.map((link) => <li key={link.id} className="nav_item active">{link.name}</li>)}
                    </ul>
                </nav>
            </div>
            <div className="right_nav">
                <p className="name">{userInfo?.fullName}</p>
                <button
                    id="exit"
                    onClick={exit}>
                    Выйти
                </button>
            </div>
        </div>
    );
}
