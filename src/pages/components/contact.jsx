import { blurRevealAnim, lineAnimRigtht } from "../../assets/framerMo";
import splitChar from "../../assets/splitChar";
import { motion } from "framer-motion";

export default function Contact() {
  const line =
    "-----------------------------------------------------------------------";
  return (
    <div className="h-screen w-full bg-gradient-to-bl from-[#3f3f3ff7] to-[#000000f9] text-white ">
      <div className="container mx-4 sm:mx-auto flex md:flex-row flex-col-reverse justify-center items-center h-full w-full">
        <motion.div className="h-[40%] w-[40%] border border-[#303030] p-16 flex justify-between relative rounded-3xl">
          <div>
            <h2 className="text-4xl mainText">Prakash Lama</h2>
            <div className="text-sm mt-8 text-[#b8b8b8]">
              <p>FullStack Developer</p>
              <p>Bhaktapur, Nepal</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-sm text-[#b8b8b8]">Email</span>{" "}
              <span>lamap8708@gmail.com</span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-[#b8b8b8]">Phone</span>{" "}
              <span>+977 9823741079</span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-[#b8b8b8]">Github</span>{" "}
              <span>Nima6666</span>
            </div>
          </div>
          {/* <div className="absolute h-[70%] top-1/2 left-1/2 -translate-y-1/2 border-l border-[#464646]"></div> */}
          <div className="absolute w-[80%] left-1/2 -translate-x-1/2 bottom-10 border-b  border-[#dadada]"></div>
        </motion.div>
        <motion.div
          className=" font-semibold mainText text-center  flex items-center flex-col justify-center text-nowrap overflow-hidden px-4 pt-10"
          variants={blurRevealAnim}
          whileInView="visible"
          initial="hidden"
          // viewport={{ once: true }}
        >
          <span className="mx-4 text-3xl">CONTACT ME</span>
          <p className="container mx-4 sm:mx-auto">
            Please get in touch if you think our work can be mutually
            benefitial!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
