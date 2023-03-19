/**
 * @license Agylam
 * App.tsx
 * Facebook, продукт компании Meta, которая признана экстремистской организацией в России
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { SchedulePage } from "./pages/SchedulePage";

import "./css/main.css";
import "./css/color-light.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SchedulePage />} />
      <Route path="/schedule" element={<IndexPage />} />
    </Routes>
  );
}
