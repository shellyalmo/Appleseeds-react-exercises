import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context/DarkModeContext";

import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import Layout from "./components/Layout";

function App() {
  const { dark } = useGlobalContext();

  return (
    <div className={dark ? "App dark" : "App light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
