import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectShowcase from "./pages/ProjectShowcase";
import LeftBlock from "./components/sections/LeftBlock";

function RouteProgressBar({ routeKey }: { routeKey: string }) {
  const shouldReduceMotion = useReducedMotion();
  const firstRouteRender = useRef(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (firstRouteRender.current) {
      firstRouteRender.current = false;
      return;
    }

    setIsVisible(true);
    const hideTimer = window.setTimeout(() => setIsVisible(false), 420);

    return () => window.clearTimeout(hideTimer);
  }, [routeKey]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[120] h-[2px] w-full origin-left bg-gradient-to-r from-[#D7850C] via-[#D4C7B4] to-[#efe4d3]"
          initial={{ scaleX: 0, opacity: 0.9 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </AnimatePresence>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const routeKey = `${location.pathname}${location.search}`;

  return (
    <>
      <RouteProgressBar routeKey={routeKey} />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectShowcase />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/test" element={<LeftBlock />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
