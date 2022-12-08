import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider, ModalProvider, ThemeProvider } from 'hooks';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
