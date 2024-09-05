import { useRef, useState } from "react";
import {
  blurRevealAnim,
  cardAnim,
  lineAnimRigtht,
} from "../../assets/framerMo";
import splitChar from "../../assets/splitChar";
import { motion } from "framer-motion";

export default function Contact() {
  const cardRef = useRef();
  const glowRef = useRef();

  const [bounds, setBounds] = useState();

  function rotateToMouse(e) {
    if (!bounds) return;
    // const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 1.6}deg
      )
    `;

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }
  return (
    <div className="min-h-screen w-full text-white relative overflow-hidden pb-10 flex justify-center items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse justify-center items-center h-full w-full perspective z-10">
        <motion.div
          id="card"
          className="h-fit md:h-[400px] md:w-[700px] w-[80%] p-8 md:p-16 flex flex-col md:flex-row justify-between relative rounded-2xl overflow-hidden pb-14 z-50 bg-[#00000077]"
          ref={cardRef}
          variants={cardAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onMouseEnter={() =>
            setBounds(cardRef.current.getBoundingClientRect())
          }
          onMouseLeave={() => {
            cardRef.current.style.transform = "";
            cardRef.current.style.background = "";
          }}
          onMouseMoveCapture={rotateToMouse}
        >
          <div className="h-fit">
            <h2 className="text-3xl md:text-4xl mainText">Prakash Lama</h2>
            <div className="text-sm mt-4 md:mt-8 text-[#b8b8b8]">
              <p>FullStack Developer</p>
              <p>Bhaktapur, Nepal</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 h-fit">
            <div className="flex flex-col">
              <span className="text-sm text-[#b8b8b8]">Email</span>
              <span>lamap8708@gmail.com</span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-[#b8b8b8]">Phone</span>
              <span>+977 9823741079</span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-[#b8b8b8]">Github</span>
              <span>Nima6666</span>
            </div>
          </div>
          <div className="absolute w-[80%] left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 border-b border-[#dadada]"></div>
          <div
            className="w-full h-full top-0 left-0 absolute glow"
            ref={glowRef}
          />
        </motion.div>
        <motion.div
          className="h-fit font-semibold flex flex-col justify-center items-start text-nowrap overflow-hidden pt-10 md:pt-0 p-16"
          variants={blurRevealAnim}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <span className="text-3xl md:text-5xl lg:text-6xl mainText">
            Let's Connect
          </span>
          <p className="mt-4 md:mt-8 container sm:mx-auto text-wrap">
            Please get in touch if you think our work can be mutually
            beneficial!
          </p>
        </motion.div>
      </div>
      {/* <div className="w-full h-full absolute top-0 left-0 pointer-events-none  z-[-1]">
        
      </div> */}
      <div className="absolute w-full h-full top-0 left-0 z-[-1] bg-black flex justify-around">
        <div className="h-[60%] w-[30%] rounded-full bg-[#80ac08] blur-[100px] absolute -right-8 z-[10] scale-150 -bottom-1/2 -translate-y-1/2 animatePulse"></div>
        <div className="h-[300px] w-[300px] rounded-full bg-[#3a4dff] blur-[100px] absolute -right-5 z-[-2] scale-150 bottom-1/2"></div>
        <div className="h-[100px] w-[100px] rounded-full bg-[#ff5000] blur-[100px] absolute right-28 z-[10] scale-150 top-[10%]"></div>
        <div className="h-[400px] w-[400px] rounded-full bg-[#614f06] blur-[100px] absolute -right-8 z-[-1] scale-150 -bottom-1/2 translate-y-1/2"></div>
        <div className="h-full border-r border-white z-[-1] opacity-20"></div>
        <div className="h-full border-r border-white z-[-1] opacity-20"></div>

        <div className="h-full border-r border-white z-[-1] opacity-20"></div>

        <div className="h-full border-r border-white z-[-1] opacity-20"></div>
      </div>
    </div>
  );
}
