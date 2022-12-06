import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [isShowingLoading, setIsShowinLoading] = useState(false);

  const toggle = () => setIsShowing(!isShowing);
  const toggleAlert = () => setIsShowingAlert(!isShowingAlert);
  const toggleLoading = () => setIsShowinLoading(!isShowingLoading);

  return (
    <ModalContext.Provider
      value={{
        isShowing,
        toggle,
        isShowingAlert,
        toggleAlert,
        isShowingLoading,
        toggleLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};

export { ModalProvider, useModal };
