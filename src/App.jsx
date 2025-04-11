import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-yellow-50"> {/* or bg-green-50 for light green */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paste" element={<Paste />} />
          <Route path="/paste/:id" element={<ViewPaste />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
