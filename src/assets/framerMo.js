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
