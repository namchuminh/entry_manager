import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NhomDonViRoutes from './NhomDonViRoutes';
import DonViRoutes from './DonViRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/NhomDonVi/*" element={<NhomDonViRoutes />} />
      <Route path="/DonVi/*" element={<DonViRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
