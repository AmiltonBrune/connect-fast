import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@connect-fast:logged');

    return !!isLogged;
  });

  const signIn = (email, password, rememberMe) => {
    if (email === 'usuario@teste.com' && password === '123') {
      localStorage.setItem('@connect-fast:logged', 'true');

      if (rememberMe) {
        localStorage.setItem('@connect-fast:token', 'token123');
      }

      setLogged(true);
    } else {
      alert('Senha ou usuário inválidos!');
    }
  };

  const signOut = () => {
    localStorage.removeItem('@connect-fast:logged');
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
