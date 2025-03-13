import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../app/layouts/footer";
import Header from "../app/layouts/header";
import Home from "../app/pages/home";
import SeeMore from "../app/pages/see-more";
import Watch from "../app/pages/watch";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/see-more" element={<SeeMore />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
