import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import React from "react";
import Home from "./pages/home";
import { Provider } from "react-redux";
import store from "./store/store";
import Footer from "./pages/components/footer";
import Projects from "./pages/projects";
import Developments from "./pages/developments";

const Header = React.lazy(() => import("./pages/components/header"));

function App() {
  useEffect(() => {
    // particlesJS("particles-js", {
    //   particles: {
    //     number: { value: 5 },
    //     shape: { type: "circle" },
    //     color: { value: "#ffffff" },
    //     opacity: { value: 0.5 },
    //     size: { value: 100 },
    //     move: { enable: true, speed: 1 },
    //   },
    // });
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 199,
          density: {
            enable: true,
            value_area: 773.51100518494565,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 75.4716981132076,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble",
          },
          onclick: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="relative">
        <div
          id="particles-js"
          className="fixed top-0 left-0 w-full h-full z-[-1] bg-transparent overflow-hidden"
        />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/development" element={<Developments />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
