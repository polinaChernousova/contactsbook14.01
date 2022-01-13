import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navibar from "./components/Navibar";
import MainProvider from "./contexts/MainProvider";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";

const MyRoutes = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
};

export default MyRoutes;
