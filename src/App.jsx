import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leads from "./pages/LeadsManagement/LeadsManagement";
import VendorGroup from "./pages/LeadsManagement/VendorGroup";
import CreateLeadGroup from "./pages/LeadsManagement/CreateLeadGroup";
import CreateNewLead from "./pages/LeadsManagement/CreateNewLead";
import DistributionMethod from "./pages/LeadsManagement/DistributionMethod";
import PagesManagementDashboard from "./pages/PagesManagement/PagesManagementDashboard";
import KnowUs from "./../src/components/Page Management/KnowUs";
import ServicesList from "./pages/PagesManagement/ServicesList";
import HomePages from "./pages/PagesManagement/HomePages";
import VendorMain from "./pages/Vendors/VendorMain";
import CategoryDetail from "./pages/Vendors/CategoryDetail";
import CategoryPortfolio from "./pages/Vendors/CategoryPortfolio";
import ViewAll from "./pages/Vendors/ViewAll";
import CityManagement from "./pages/Cities/CityManagement";
import LocalAreaDetails from "./pages/Cities/LocalAreaDetails";
import ArticlesMain from "./pages/Articles/ArticlesMain";
import EditArticle from "./pages/Articles/EditArticle";
import Home from "./pages/HomePage/Home";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leads />} />
        <Route path="/vendor-group" element={<VendorGroup />} />
        <Route path="/create-lead-group" element={<CreateLeadGroup />} />
        <Route path="/create-new-lead" element={<CreateNewLead />} />
        <Route path="/distribution-method" element={<DistributionMethod />} />
        <Route path="/pages-management-dashboard" element={<PagesManagementDashboard />} />
        <Route path="/services-list" element={<ServicesList />} />
        <Route path="/know-us" element={<KnowUs />} />
        <Route path="/home-page" element={<HomePages />} />
        <Route path="/vendor" element={<VendorMain />} />
        <Route path="/category-detail" element={<CategoryDetail />} />
        <Route path="/category-portfolio" element={<CategoryPortfolio />} />
        <Route path="/View-all" element={<ViewAll />} />
        <Route path="/city-management" element={<CityManagement />} />
        <Route path="/local-area-details" element={< LocalAreaDetails />} />
        <Route path="/articles" element={<ArticlesMain />} />
        <Route path="/edit-article" element={<EditArticle />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  ); 
}
