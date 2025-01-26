import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomeCalendar from "./pages/home-calendar";
import MedicineBook from "./components/medicine-book";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeCalendar />} />
        <Route path="/profile" element={<MedicineBook />} />
      </Routes>
    </Router>
  );
};

export default App;