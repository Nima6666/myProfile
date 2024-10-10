import { motion } from "framer-motion";
import { FaCode, FaEye } from "react-icons/fa";
import { blurRevealAnim, buttonAnim } from "../../assets/framerMo";
import mongoImg from "/mongodb.webp";
import nodeImg from "/node.webp";
import jsImg from "/javascript.webp";
import reactImg from "/react.webp";

export default function Project({ proj, ind }) {
  const even = ind % 2;

  return (
    <motion.div
      className={`flex flex-col  justify-center backdrop-blur-md w-full border border-[#5f5f5f] my-10 p-4 rounded-lg ${
        even ? " md:flex-row flex-row" : " md:flex-row-reverse flex-row-reverse"
      }`}
      variants={blurRevealAnim}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <div className="flex-1 p-4 max-h-fit flex flex-col justify-between">
        <div>
          <h3
            className={`mainText text-2xl md:text-3xl font-semibold mb-4 ${
              even && "text-right"
            }`}
          >
            {proj.name}
          </h3>
          <p className="text-base md:text-xl">{proj.description}</p>
        </div>
        <div
          className={`flex ${
            even ? "justify-end" : "justify-start"
          } items-center mt-4`}
        >
          <motion.div
            className="mainText w-[100px] h-[40px] text-lg relative rounded-md m-3 border border-[#5f5f5f] overflow-hidden"
            whileHover="hover"
          >
            <motion.a
              href={proj.url}
              target="_blank"
              className="w-full h-full flex items-center justify-center transition-colors duration-300 text-white hover:text-black"
              variants={buttonAnim}
            >
              <span className="mr-2">Live</span>
              <FaEye />
            </motion.a>
            <motion.div
              className="absolute h-[10px] w-[10px] rounded-full top-[150%] left-1/2 transform -translate-x-1/2 z-[-1] bg-[#d1d1d1]"
              variants={{
                hover: { top: 0, scale: 13 },
              }}
              transition={{ duration: 0.4 }}
            ></motion.div>
          </motion.div>
          <motion.div
            className={`mainText w-[100px] h-[40px] text-lg relative rounded-md m-3 border border-[#5f5f5f] overflow-hidden bg-yellow-400 text-black hover:text-white ${
              proj.code ? "" : "cursor-not-allowed"
            }`}
            whileHover="hover"
          >
            <motion.a
              href={proj.code ? proj.code : ""}
              target={proj.code ? "_blank" : ""}
              className={`w-full h-full flex items-center justify-center transition-colors duration-300  ${
                !proj.code && "pointer-events-none"
              }`}
              variants={{
                hover: {
                  letterSpacing: "3px",
                  transition: { duration: 0.3 },
                },
              }}
            >
              <span className="mr-2 z-10">Code</span>
              <FaCode className="z-10" />
            </motion.a>
            <motion.div
              className="absolute h-[10px] w-[10px] rounded-full top-[-250%] left-1/2 z-[0] bg-[#465e04]"
              variants={{
                hover: { top: 1 / 2, scale: 14 },
              }}
              transition={{ duration: 0.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      <div className="relative overflow-hidden flex-1 h-[300px] md:h-full">
        <img src={proj.image} alt="" className="w-full h-full object-cover" />
        <motion.div className="absolute top-0 left-0 w-full h-full opacity-0 duration-300 transition-opacity hover:opacity-100 bg-[#000000a7] flex justify-center items-center">
          {proj.tools.map((tool, index) => {
            return (
              <motion.div
                className="p-4 rounded-full border border-[#474747] w-[80px] h-[80px] relative hover:cursor-pointer m-2 bg-black overflow-hidden"
                key={index}
              >
                <img
                  src={
                    tool === "react"
                      ? reactImg
                      : tool === "mongo"
                      ? mongoImg
                      : tool === "node"
                      ? nodeImg
                      : tool === "vanillaJS" && jsImg
                  }
                  className="w-full h-full"
                  alt=""
                />
                <motion.img
                  src={
                    tool === "react"
                      ? reactImg
                      : tool === "mongo"
                      ? mongoImg
                      : tool === "node"
                      ? nodeImg
                      : tool === "vanillaJS" && jsImg
                  }
                  className="w-full h-full absolute top-0 left-0 blur-[20px] scale-125 opacity-50 transition-opacity duration-500 hover:opacity-100"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
