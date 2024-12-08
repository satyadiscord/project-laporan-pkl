import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Laporan, Project, MainApp } from "./pages/index";
import { Bab1, Bab2, Bab3, Bab4 } from "./pages/laporan/laporan-pages/index";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />}>
            <Route index element={<Home />} />
            <Route path="/project" element={<Project />} />

            {/* Route Project */}
            <Route path="/laporan" element={<Laporan />}>
              <Route index element={<Bab1 />} />
              <Route path="bab-1" element={<Bab1 />} />
              <Route path="bab-2" element={<Bab2 />} />
              <Route path="bab-3" element={<Bab3 />} />
              <Route path="bab-4" element={<Bab4 />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
