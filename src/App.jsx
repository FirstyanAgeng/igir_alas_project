import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
