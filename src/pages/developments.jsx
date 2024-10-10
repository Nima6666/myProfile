import useMeasure from "react-use-measure";
import { projects } from "../assets/projects";
import Projects from "./projects";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import splitChar from "../assets/splitChar";
import { lineAnimRigtht } from "../assets/framerMo";

export default function Developments() {
  const line = "---------------------";
  let [ref, { width, height }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    let controls;

    let finalPosition = -width / 2 - 4;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 40,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

  const xRevTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;

    let finalPosition = width / 2 - 4;
    controls = animate(xRevTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 70,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xRevTranslation, width]);

  return (
    <div className="relative overflow-hidden">
      <div
        id="sliderContainer"
        className="h-[330px] overflow-hidden relative bg-[#f7f7f7a7] select-none"
      >
        <div className="absolute backdrop-blur-[1px] top-0 left-0 h-full w-screen z-40 overlay flex justify-center items-center text-white mainText select-none pointer-events-none text-nowrap">
          <div className="scale-x-[-1] overflow-visible">
            {splitChar(line).map((eachLi, index) => {
              return (
                <motion.span
                  key={index}
                  variants={lineAnimRigtht}
                  custom={index}
                  initial="hidden"
                  className="text-right"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {eachLi}
                </motion.span>
              );
            })}
          </div>
          <span className=" text-4xl mx-4">My Developments</span>
          {splitChar(line).map((eachLi, index) => {
            return (
              <motion.span
                key={index}
                variants={lineAnimRigtht}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {eachLi}
              </motion.span>
            );
          })}
        </div>
        <motion.div
          id="topSlider"
          className="sliders flex gap-2 w-max mt-2 "
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...projects, ...projects].map((proj, i) => {
            return (
              <div className="image overflow-hidden rounded-xl" key={i}>
                <img
                  src={proj.image}
                  className="h-[150px] w-[267px] object-cover"
                />
              </div>
            );
          })}
        </motion.div>
        <motion.div
          id="bottomSlider"
          className="sliders flex gap-2 right-0 w-max mt-2 absolute"
          style={{ x: xRevTranslation }}
        >
          {[...projects, ...projects].map((proj, i) => {
            return (
              <div className="image overflow-hidden rounded-xl" key={i}>
                <img
                  src={proj.image}
                  className="h-[150px] w-[267px] object-cover"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
      <Projects />
    </div>
  );
}
