import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtpPage from "./otpPage";
import PosPage from "./posDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<OtpPage />} />
        <Route path="/home" element={<PosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
