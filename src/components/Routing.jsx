import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Alerts from "./Alerts";
import ReportIncident from "./ReportIncident";

function Routing() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="alerts" element={<Alerts/>}/>
        <Route path="report" element={<ReportIncident/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
