import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Tips from "./pages/Tips";
import Rewards from "./pages/Rewards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/diary" element={<Diary/>} />
        <Route path="/tips" element={<Tips/>} />
        <Route path="/rewards" element={<Rewards/>} />
      </Routes>
    </Router>
  );
}

export default App;
