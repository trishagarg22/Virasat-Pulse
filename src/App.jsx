import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExploreMapPage from "./pages/ExploreMapPage";
import TimeMachinePage from "./pages/TimeMachinePage";
import RiskRadarPage from "./pages/RiskRadarPage";
import HeritageDetailPage from "./pages/HeritageDetailPage";
import RescueMissionPage from "./pages/RescueMissionPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Screen 1: Home Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Screen 2: Explore / Heritage Map */}
        <Route path="/explore" element={<ExploreMapPage />} />

        {/* Screen 3: Heritage Time Machine */}
        <Route path="/time-machine" element={<TimeMachinePage />} />

        {/* Screen 4: Heritage Risk Radar */}
        <Route path="/risk-radar" element={<RiskRadarPage />} />

        {/* Screen 5: Heritage Detail Page */}
        <Route path="/detail/:id" element={<HeritageDetailPage />} />
        <Route path="/detail" element={<HeritageDetailPage />} />

        {/* Screen 6: Heritage Rescue Mission */}
        <Route path="/rescue-mission" element={<RescueMissionPage />} />

        {/* Screen 7: User Profile / Settings */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
