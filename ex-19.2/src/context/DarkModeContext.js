import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    // setDark(!dark);  bad practice
    setDark((prevMode) => !prevMode); // best practice
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
