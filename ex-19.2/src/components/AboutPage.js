import React from "react";
import { useGlobalContext } from "../context/DarkModeContext";

const AboutPage = () => {
  const { dark, toggleDarkMode } = useGlobalContext();

  return (
    <div>
      <h1>The about page</h1>
      <button onClick={toggleDarkMode}>
        {dark ? "Make it light" : "Make it dark"}
      </button>
    </div>
  );
};

export default AboutPage;
