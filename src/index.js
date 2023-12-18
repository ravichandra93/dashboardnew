import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegulatoryUpdates from "views/examples/RegulatoryUpdates"
import OpenAccess from "views/examples/OpenAccess";
import TariffCharges from "views/examples/TariffCharges";
import OAregulatoryupdates from "views/examples/OAregulatoryupdates";
import OAproject from "views/examples/OAproject";
import Javascript from "views/index-sections/Javascript";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/regulatory-updates" element={<RegulatoryUpdates />} />
      <Route path="/open-access" element={<OpenAccess />} />
      <Route path="/tariff-charges" element={<TariffCharges />} />
      <Route path="/oa-regulatory-updates" element={<OAregulatoryupdates />} />
      <Route path="/oa-project" element={<OAproject />} />
      <Route path="/javascript" element={<Javascript />} />

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
