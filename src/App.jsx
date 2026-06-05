import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./components/Login";
import TinTuc from "./components/TinTuc";
import ShowProduct from "./components/ShowProduct";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Shoppingcart from "./components/ShowCart"
export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/gioithieu" element={<About />} />
        <Route path="/sanpham" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/giohang" element={<Shoppingcart />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>

      <Footer />
    </Router>
  );
}