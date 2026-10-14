import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import DreamBackground from "./components/DreamBackground";
import FloatingHearts from "./components/FloatingHearts";
import MusicButton from "./components/MusicButton";

import Welcome from "./pages/Welcome";
import Memories from "./pages/Memories";
import CakePage from "./pages/CakePage";
import Letters from "./pages/Letters";
import Wishes from "./pages/Wishes";
import Final from "./pages/Final";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-shell">
      {/* Every route opens from the top */}
      <ScrollToTop />

      <DreamBackground />
      <FloatingHearts />
      <Navbar />
      <MusicButton />

      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/cake" element={<CakePage />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;