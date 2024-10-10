import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/footer";
import Contact from "./components/contact";

const Hero = React.lazy(() => import("./hero"));

const Projects = React.lazy(() => import("./projects"));

export default function Home() {
  const introComplete = useSelector(
    (state) => state.introReducer.introComplete
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-screen text-white text-6xl font-semibold flex justify-center items-center">
            Loading...
          </div>
        }
      >
        <Hero />
      </Suspense>
      <Suspense
        fallback={
          <div className="w-screen h-screen text-white text-6xl font-semibold flex justify-center items-center">
            Loading...
          </div>
        }
      >
        {introComplete && <Projects />}
      </Suspense>
      <Suspense
        fallback={
          <div className="w-screen h-screen text-white text-6xl font-semibold flex justify-center items-center">
            Loading...
          </div>
        }
      >
        {introComplete && <Contact />}
      </Suspense>
    </>
  );
}
