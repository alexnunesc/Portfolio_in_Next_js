import { createContext } from 'react';

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  // Defina os estados e funções necessárias para o provedor

  const buildWhatsAppLink = () => {
    const phoneNumber = '+5562998528527';
    const message = 'Olá, estou entrando em contato pelo seu site.';

    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    return url;
  };

  // Forneça os valores e funções do contexto
  return (
    <NumberContext.Provider value={{ buildWhatsAppLink }}>
      {children}
    </NumberContext.Provider>
  );
};
