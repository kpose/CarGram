import React, {useState, createContext} from 'react';

export const ThemeContext = React.createContext<any>({
  theme: 'light',
  toggleTheme: () => {},
});

export const UserContext = createContext<any>({
  user: [],
  setUser: () => {},
});
