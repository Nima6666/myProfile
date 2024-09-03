import { Link } from "react-router-dom";
import logoImg from "/logo/logo-no-background.svg";
import { motion } from "framer-motion";
import { logoMo } from "../../assets/framerMo";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
    scrolled && (
      <motion.header
        className="fixed top-0 w-screen z-50"
        initial={{ y: -100, filter: "blur(10px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
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
            className="h-[120px] p-4"
          >
            <img
              src={logoImg}
              alt="Company Logo"
              className="h-full w-fit p-2"
            />
          </motion.div>
          <div className="text-white font-semibold text-2xl nav flex">
            <Link to="/" className="p-2">
              Home
            </Link>
            <Link to="/" className="mx-16 p-2 flex items-center justify-center">
              Portfolio
              <div>
                <RiArrowDropDownLine />
              </div>
            </Link>
            <Link to="/" className="p-2">
              About
            </Link>
          </div>
        </div>
      </motion.header>
    )
  );
}
