import { blurRevealAnim, lineAnimRigtht } from "../assets/framerMo";
import { projects } from "../assets/projects";
import splitChar from "../assets/splitChar";
import Project from "./components/project";
import { motion } from "framer-motion";

export default function Projects() {
  const line =
    "-----------------------------------------------------------------------";
  return (
    <div className="h-fit w-full overflow-hidden bg-transparent text-white mt-10">
      <motion.div
        className=" font-semibold mainText text-center container mx-4 sm:mx-auto flex items-center justify-center text-nowrap overflow-hidden px-4"
        variants={blurRevealAnim}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="scale-x-[-1] overflow-visible">
          {splitChar(line).map((eachLi, index) => {
            return (
              <motion.span
                key={index}
                variants={lineAnimRigtht}
                custom={index}
                initial="hidden"
                animate="visible"
                className="text-right"
              >
                {eachLi}
              </motion.span>
            );
          })}
        </div>
        <span className="mx-4 text-3xl">MY PROJECTS</span>
        {splitChar(line).map((eachLi, index) => {
          return (
            <motion.span
              key={index}
              variants={lineAnimRigtht}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              {eachLi}
            </motion.span>
          );
        })}
      </motion.div>
      <div className="container mx-auto p-2">
        {projects.map((proj, index) => {
          return (
            <div key={index}>
              <Project proj={proj} ind={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
