import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import DashboarPage from "./Screens/dashboard";
import AddTablePage from "./Screens/addTable/index.jsx"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<DashboarPage />} />
      </Route>
        <Route path="/register-table" element={<AddTablePage />} />
    </Routes>
  );
};
