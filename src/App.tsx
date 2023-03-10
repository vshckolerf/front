/**
 * @license Agylam
 * App.tsx
 * Facebook, продукт компании Meta, которая признана экстремистской организацией в России
 */

import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { SchedulePage } from "./pages/SchedulePage";

import "./css/main.css";
import "./css/color-light.css";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<IndexPage />}
            />
            <Route
                path="/schedule"
                element={<SchedulePage />}
            />
        </Routes>
    );
}
