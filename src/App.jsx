import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import DestinationPage from "./pages/DestinationPage";
import MapTransportPage from "./pages/MapTransportPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import PlanPage from "./pages/PlanPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="visit-palembang/" element={<HomePage />} />
          <Route path="visit-palembang/gallery" element={<GalleryPage />} />
          <Route
            path="visit-palembang/destinations"
            element={<DestinationPage />}
          />
          <Route path="visit-palembang/map" element={<MapTransportPage />} />
          <Route path="visit-palembang/contact" element={<ContactPage />} />
          <Route path="visit-palembang/plan" element={<PlanPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
