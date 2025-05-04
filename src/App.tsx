import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import VictimTablePage from "./pages/victimTablePage"; 

import React from "react";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/victims" element={<VictimTablePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
