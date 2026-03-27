import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "/logo/logo-no-background.svg";

import Hamburger from "hamburger-react";

import { motion } from "framer-motion";
import { logoMo } from "../../assets/framerMo";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [hamburger, setHamburger] = useState(true);

  const [isOpen, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hamburger, handleResize, setHamburger]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateToExperience = () => {
    if (location.pathname !== "/") {
      navigate("/#experience");
      setOpen(false);
      return;
    }

    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const navigateToHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setOpen(false);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const navigateToProjects = () => {
    if (location.pathname !== "/") {
      navigate("/#projects");
      setOpen(false);
      return;
    }

    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
      initial={{ y: -100, filter: "blur(10px)" }}
      animate={{
        y: scrolled ? 0 : isOpen ? 0 : -200,
        filter: scrolled ? "blur(0px)" : isOpen ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        id="logo"
        className="flex items-center justify-between w-full mt-2 md:mt-4 px-3 md:px-5 py-2 md:py-3 rounded-2xl border border-[#ffffff29] bg-[#090b14c7] backdrop-blur-xl shadow-[0_10px_35px_-20px_rgba(0,0,0,0.95)]"
      >
        <motion.div
          variants={logoMo}
          initial="hidden"
          animate="visible"
          className="h-[60px] md:h-[68px] px-1 md:px-2 z-50"
        >
          <img src={logoImg} alt="Company Logo" className="h-full w-fit p-2" />
        </motion.div>
        <div className="text-white font-semibold text-xl md:text-2xl nav flex mainText items-center">
          {hamburger ? (
            <>
              <div className="mr-2 z-50">
                <Hamburger
                  color="white"
                  toggled={isOpen}
                  toggle={setOpen}
                  className=""
                />
              </div>
              {isOpen && (
                <div className="fixed top-0 left-0 h-screen w-screen bg-[#05070f] z-0 flex flex-col text-4xl p-6">
                  <button
                    type="button"
                    className="p-2 mt-24 text-left"
                    onClick={navigateToHome}
                  >
                    HOME
                  </button>
                  <button
                    type="button"
                    className="p-2 text-left"
                    onClick={navigateToExperience}
                  >
                    EXPERIENCE
                  </button>
                  <button
                    type="button"
                    className="p-2 text-left"
                    onClick={navigateToProjects}
                  >
                    PROJECTS
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={navigateToHome}
                className="px-4 py-2 rounded-lg hover:bg-[#ffffff17] transition-colors duration-200"
              >
                HOME
              </button>
              <button
                type="button"
                onClick={navigateToExperience}
                className="mx-2 px-4 py-2 rounded-lg hover:bg-[#ffffff17] transition-colors duration-200"
              >
                EXPERIENCE
              </button>
              <button
                type="button"
                onClick={navigateToProjects}
                className="mx-2 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-[#ffffff17] transition-colors duration-200"
              >
                PROJECTS
              </button>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
}
