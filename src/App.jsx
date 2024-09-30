import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTourist from "./Tourist/AllTourist";
import Home from './HomePage/Home';
import ScrollToTop from './ScrollTop';
import MainTourist from './Tourist/MainTourist';

export default function App() {
  return (
    <>
      <ScrollToTop/>
     <Routes>
        <Route path="/touristplaces" element={<AllTourist />} />
        <Route path="/" element={<Home />} />
        <Route path="/MainTourist" element={<MainTourist/>} />
      </Routes>


 
      
    </>
  );
}
