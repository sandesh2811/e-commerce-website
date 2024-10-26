// Navbar animation variants

export const mainContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const backgroundVariants = {
  initial: {
    opacity: 0,
    height: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    height: "100vh",
    y: 0,
    transition: {
      duration: 1.22,
      type: "tween",
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    opacity: 1,
    height: 0,
    y: "-100%",
    transition: {
      duration: 1.22,
      delay: 0.33,
      type: "tween",
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const menuVariants = {
  initial: {
    height: 0,
  },
  animate: {
    height: "100vh",

    transition: {
      duration: 1.22,
      staggerChildren: 0.33,
      delayChildren: 1,
      type: "tween",
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 1.22,
      type: "tween",
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const textVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.5, 1, 0.89, 1],
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.5,
    },
  },
};

// Navbar Animation Variants
