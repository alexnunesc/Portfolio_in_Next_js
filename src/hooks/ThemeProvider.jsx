import queryString from 'query-string';
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

  function buildWhatsAppLink() {
    const phoneNumber = +5562998528527;
    const message = 'Olá, estou entrando em contato pelo seu site.';
  
    const query = queryString.stringify({
      phone: phoneNumber,
      text: message,
    });
  
    return `https://api.whatsapp.com/send?${query}`;
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, buildWhatsAppLink }}>
      <div className="theme-provider" style={style}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
