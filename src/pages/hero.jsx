import { iconAnim, initialPageAnim, typingAnim } from "../assets/framerMo";
import splitChar from "../assets/splitChar";
import me from "/mesazelf.jpg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { introActions } from "../store/slices/introSlice";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const intro = "Hello, I am Prakash Lama.";

  const dispatch = useDispatch();

  const introComplete = useSelector(
    (state) => state.introReducer.introComplete
  );

  return (
    <div className="h-screen w-full overflow-hidden flex justify-center items-center bg-transparent ">
      <motion.div
        id="home"
        className="relative flex justify-center flex-col-reverse lg:flex-row items-center w-full container mx-auto sm:h-[90%] h-[100%] rounded-none  sm:rounded-lg overflow-hidden backdrop-blur-sm shadow-md shadow-[#3d3d3d] border border-[#5f5f5f]"
        variants={initialPageAnim}
        initial="scaled"
        animate="visible"
      >
        <div className="absolute top-5 left-5 flex z-40">
          {introComplete && (
            <>
              <motion.a
                href="https://github.com/nima6666"
                target="_blank"
                variants={iconAnim}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <FaGithub color="white" size={50} className="mr-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prakash-lama-020614295/"
                target="_blank"
                variants={iconAnim}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <FaLinkedin color="white" size={50} />
              </motion.a>
            </>
          )}
        </div>
        <div className="flex-1 text-white flex flex-col justify-center items-center">
          <div className="">
            <div className="text-3xl p-2 text-wrap w-10/12 sm:w-auto md:text-5xl lg:text-6xl font-semibold">
              {splitChar(intro).map((char, index) => {
                return (
                  <motion.span
                    className="motion-span mainText"
                    variants={typingAnim}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    key={index}
                    onAnimationComplete={() => {
                      // Check if the last character's animation is complete
                      if (index === splitChar(intro).length - 1) {
                        dispatch(introActions.setIntroComplete());
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>

            <div className="sm:min-h-14 min-h-24 text-xl md:text-3xl w-10/12 sm:w-auto p-2">
              {introComplete && (
                <motion.div
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  I am a Full-Stack Developer.
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className="md:flex-[0.7] flex-1 h-full overflow-hidden mt-20 lg:mt-0">
          <div className="relative h-full w-full">
            <img
              src={me}
              alt="ME"
              className="h-full w-full object-cover rounded-full lg:rounded-none"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity rounded-full lg:rounded-none">
              AI is Awesome. Made Using Flux-dev
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
