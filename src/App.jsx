import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50"> 
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
