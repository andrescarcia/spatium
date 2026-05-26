import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import Room from './pages/Room';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Gallery />
          </>
        } />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
