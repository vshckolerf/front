import { ThemeSwitcherComponent } from "../Components/ThemeSwitcherComponent";
import { API_URL } from "../config";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import "../css/index.css";
import "react-toastify/dist/ReactToastify.css";

export function IndexPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const auth = () => {
        fetch(API_URL + "auth/login", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then((resp: Response) => {
            if (resp.ok) {
                resp.json().then((respObj) => {
                    localStorage.setItem("jwt", respObj.token);
                    toast.success("Успешно!", {
                        position: toast.POSITION.BOTTOM_LEFT,
                        autoClose: 1000,
                        onClose: () => {
                            navigate("/schedule");
                        },
                    });
                });
            } else {
                toast.error("Неверные почта или пароль!", {
                    position: toast.POSITION.BOTTOM_LEFT,
                    autoClose: 2000,
                });
            }
        });
    };

    return (
        <div className="wrapper">
            <ToastContainer limit={3} />
            <div id="auth">
                <img
                    src={logoImg}
                    id="logo"
                />
                <div id="auth_inputs">
                    <input
                        type="email"
                        id="email"
                        className="auth_inp"
                        required
                        placeholder="Почта"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        className="auth_inp"
                        required
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        id="button"
                        onClick={auth}>
                        Войти
                    </button>
                </div>
                <p id="rem_pass">
                    Для смены пароля свяжитесь с{" "}
                    <span className="mimbol">@mimbol</span>
                </p>
            </div>
            <ThemeSwitcherComponent />
        </div>
    );
}
