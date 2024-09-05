import { color } from "framer-motion";

export const logoMo = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.2,
    },
    opacity: 1,
  },
  hidden: {
    y: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.2,
    },
    opacity: 0,
  },
};

export const typingAnim = {
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      damping: 20,
      stiffness: 200,
      delay: custom * 0.09,
    },
    blur: 0,
  }),
  hidden: {
    opacity: 0,
    x: 50,
    filter: "blur(5px)",
  },
};

export const initialPageAnim = {
  scaled: {
    scale: 1.2,
  },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      damping: 12,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

export const iconAnim = {
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      delay: custom * 0.09,
    },
  }),
  hidden: {
    opacity: 0,
    y: -100,
  },
};

export const buttonAnim = {
  hover: {
    letterSpacing: "3px",
    transition: { duration: 0.3 },
  },
};

export const blurRevealAnim = {
  visible: {
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      damping: 12,
      stiffness: 100,
      duration: 0.3,
    },
    opacity: 1,
  },
  hidden: {
    y: 100,
    filter: "blur(10px)",
    // transition: {
    //   type: "tween",
    //   damping: 12,
    //   stiffness: 100,
    //   duration: 0.2,
    // },
    opacity: 0,
  },
};

export const lineAnimRigtht = {
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    // y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200,
      delay: custom * 0.035,
    },
    blur: 0,
  }),
  hidden: {
    opacity: 0,
    x: -100,
    // y: 100,
  },
};

export const lineAnimLeft = {
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 1000,
      stiffness: 900,
      delay: custom * 0.09,
    },
    blur: 0,
  }),
  hidden: {
    opacity: 0,
    x: -50, // Move text to the left
  },
};
