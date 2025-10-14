import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Leads from "./pages/LeadsManagement/LeadsManagement";
import VendorGroup from "./pages/LeadsManagement/VendorGroup";
import CreateLeadGroup from "./pages/LeadsManagement/CreateLeadGroup";
import CreateNewLead from "./pages/LeadsManagement/CreateNewLead";
import DistributionMethod from "./pages/LeadsManagement/DistributionMethod";
import PagesManagementDashboard from "./pages/PagesManagement/PagesManagementDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Leads />} />
        <Route path="/vendorgroup" element={<VendorGroup />} />
        <Route path="/createLeadgroup" element={<CreateLeadGroup />} />
        <Route path="/create-new-lead" element={<CreateNewLead />} />
        <Route path="/distribution-method" element={<DistributionMethod />} />
        <Route path="/pages-management-dashboard" element={<PagesManagementDashboard />} />
      </Routes>
    </Router>
  );
}
