import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import Client from 'pages/Clients';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path='/' element={<Client />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
