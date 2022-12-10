import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Signin from 'pages/Signin';
import ForgotPassword from 'pages/ForgotPassword';
import VerifyCode from 'pages/VerifyCode';

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/forgot-password' element={<ForgotPassword />} />
    <Route path='/verify-code' element={<VerifyCode />} />
  </Routes>
);

export default AuthRoutes;
