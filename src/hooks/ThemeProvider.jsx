import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const style = {
    '--fundoDark': theme === 'dark' ? '#383446' : 'white',
    '--fundoDark2': theme === 'dark' ? '#0F1624' : 'white',
    '--colorDark': theme === 'dark' ? 'white' : '0F1624',
    '--colorFont2': theme === 'dark' ? '#a8cafa' : '#3d535f',
    '--colorFont': theme === 'dark' ? 'white' : '#7f00ff',
    '--roxoMedio': theme === 'dark' ? '#8095f5' : '#7f00ff',
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="theme-provider" style={style}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
