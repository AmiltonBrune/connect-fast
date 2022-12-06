import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from 'hooks/auth';
import { ModalProvider } from 'hooks/modal';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
