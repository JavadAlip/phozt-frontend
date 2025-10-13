import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Leads from "./pages/LeadsManagement/LeadsManagement";
import VendorGroup from "./pages/LeadsManagement/VendorGroup";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Leads />} />
         <Route path="/vendorgroup" element={<VendorGroup />} />
      </Routes>
    </Router>
  );
}
