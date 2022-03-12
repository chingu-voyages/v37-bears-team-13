import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header/Header';
import AddStock from '../pages/AddStock';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import WrongRoutePage from '../pages/WrongRoutePage';
import { useState } from 'react';
const AppRouter = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<WrongRoutePage />} />
        <Route path="/addStock" element={<AddStock />} />
      </Routes>
    </HashRouter>
  );
};
export default AppRouter;
