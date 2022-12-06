import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { useAuth } from 'hooks/auth';

// import App from './app.routes';
import Auth from './auth.routes';

const Routes = () => {
  // const { logged } = useAuth();
  return <BrowserRouter>{<Auth />}</BrowserRouter>;
  // return <BrowserRouter>{logged ? <App /> : <Auth />}</BrowserRouter>;
};

export default Routes;