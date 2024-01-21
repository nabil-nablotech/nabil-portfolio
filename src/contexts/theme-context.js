import React, { createContext, useState } from "react";

import { theDarkTheme, theLightTheme } from "../theme/theme";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(theDarkTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setDark] = useState(true);
  const [language, setLanguage] = useState("en");

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeTheme = () => {
    if (isDark) {
      setTheme(theLightTheme);
      setDark(false);
    } else {
      setTheme(theDarkTheme);
      setDark(true);
    }
  };

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const value = {
    theme,
    drawerOpen,
    setHandleDrawer,
    changeTheme,
    isDark,
    language,
    changeLanguage,
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
