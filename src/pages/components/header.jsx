import { Link } from "react-router-dom";
import logoImg from "/logo/logo-no-background.svg";
import { motion } from "framer-motion";
import { logoMo } from "../../assets/framerMo";
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
    <motion.header
      className="fixed top-0 w-screen z-50 backdrop-blur-md bg-[#000000a7]"
      initial={{ y: -100, filter: "blur(10px)" }}
      animate={{
        y: scrolled ? 0 : -100,
        filter: scrolled ? "blur(0px)" : "blur(10px)",
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
          className="h-[120px] p-4"
        >
          <img src={logoImg} alt="Company Logo" className="h-full w-fit p-2" />
        </motion.div>
        <div className="text-white font-semibold text-2xl nav flex mainText">
          <Link to="/" className="p-2">
            HOME
          </Link>
          <Link to="/" className="mx-16 p-2 flex items-center justify-center">
            DEVELOPMENT
          </Link>
          <Link to="/" className="p-2">
            ABOUT
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
