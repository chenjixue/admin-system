import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import home from ""
const RoutePage = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};
export default RoutePage;
