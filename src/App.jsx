
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  About,Home, Video, Documentation } from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;