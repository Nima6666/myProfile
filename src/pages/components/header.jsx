import { Link } from "react-router-dom";
import logoImg from "/logo/logo-no-background.svg";

import Hamburger from "hamburger-react";

import { motion } from "framer-motion";
import { logoMo } from "../../assets/framerMo";
import { useEffect, useState } from "react";

export default function Header() {
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

  return (
    <motion.header
      className="fixed top-0 w-screen z-50 backdrop-blur-md bg-[#000000a7]"
      initial={{ y: -100, filter: "blur(10px)" }}
      animate={{
        y: scrolled ? 0 : isOpen ? 0 : -200,
        filter: scrolled ? "blur(0px)" : isOpen ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        id="logo"
        className="flex items-center justify-between container mx-auto"
      >
        <motion.div
          variants={logoMo}
          initial="hidden"
          animate="visible"
          className="h-[80px] p-4 z-50"
        >
          <img src={logoImg} alt="Company Logo" className="h-full w-fit p-2" />
        </motion.div>
        <div className="text-white font-semibold text-2xl nav flex mainText">
          {hamburger ? (
            <>
              <div className="mr-10 z-50">
                <Hamburger
                  color="white"
                  toggled={isOpen}
                  toggle={setOpen}
                  className=""
                />
              </div>
              {isOpen && (
                <div className="fixed top-0 left-0 h-screen w-screen bg-[#000000] z-0 flex flex-col text-4xl p-4">
                  <Link to="/" className="p-2 mt-20">
                    HOME
                  </Link>
                  <Link to="/development" className="p-2">
                    DEVELOPMENT
                  </Link>
                  <Link to="/" className="p-2">
                    ABOUT
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/" className="p-2">
                HOME
              </Link>
              <Link
                to="/development"
                className="mx-16 p-2 flex items-center justify-center"
              >
                DEVELOPMENT
              </Link>
              <Link to="/" className="p-2">
                ABOUT
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
}
