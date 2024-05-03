import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page";
import Home from "./Home";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page" element={<Page />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
