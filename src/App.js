import React from "react";
import Header from "./Pages/header";
import Landing from "./Pages/landing";
import Sign from "./auth/sign";
import Login from "./auth/login";
import Footer from "./Pages/footer";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from './Pages/cart';
import About from "./Pages/about";
import Contact from './Pages/contact';
import Washlist from './Pages/washlist';
import { SkeletonTheme } from "react-loading-skeleton";


function App() {
  return (
    <SkeletonTheme baseColor="#EEE" highlightColor="#525252">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Washlist" element={<Washlist/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
