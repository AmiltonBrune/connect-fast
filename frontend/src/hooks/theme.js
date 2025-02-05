import React, { createContext, useState, useContext } from 'react';

import light from 'styles/themes/light';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem('@connect-fast:theme');

    if (themeSaved) return JSON.parse(themeSaved);
    else return light;
  });

  const toggleTheme = () => {
    setTheme(light);
    localStorage.setItem('@connect-fast:theme', JSON.stringify(light));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
