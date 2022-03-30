import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
