// Navbar animation variants

export const mobileNavVariants = {
  initial: {
    y: "-100%",
  },
  enter: {
    y: 0,
    transition: {
      duration: 1.33,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 1.33,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Navbar Animation Variants

// Hero Section Animation Variants

export const textVariants = {
  initial: {
    opacity: 0,
    y: "250%",
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.078 * i,
    },
  }),
};

export const wrapperContainerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export const subTextVariants = {
  initial: {
    opacity: 0,
    y: "250%",
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const buttonVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.95,
    },
  },
};
