import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectShowcase from "./pages/ProjectShowcase";
import LeftBlock from "./components/sections/LeftBlock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectShowcase />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/test" element={<LeftBlock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
