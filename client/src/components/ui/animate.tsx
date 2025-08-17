import { motion } from "framer-motion";

/**
 * MotionUp
 * ----------
 * Animates children upward into view with a fade-in effect.
 * - `immediate`: if true → animate on mount, else → animate on scroll (in-view).
 */
const MotionUp = ({ immediate = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!immediate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }}
      {...props}
    />
  );
};

/**
 * MotionDown
 * -----------
 * Animates children downward into view with a fade-in effect.
 */
const MotionDown = ({ immediate = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!immediate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }}
      {...props}
    />
  );
};

/**
 * MotionLeft
 * -----------
 * Animates children sliding in from the left.
 */
const MotionLeft = ({ immediate = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={immediate ? { opacity: 1, x: 0 } : undefined}
      whileInView={!immediate ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }}
      {...props}
    />
  );
};

/**
 * MotionRight
 * ------------
 * Animates children sliding in from the right.
 */
const MotionRight = ({ immediate = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={immediate ? { opacity: 1, x: 0 } : undefined}
      whileInView={!immediate ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }}
      {...props}
    />
  );
};

/**
 * MotionScale
 * ------------
 * Scales children up slightly on mount (simple pop-in effect).
 */
const MotionScale = ({ immediate = false, ...props }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      {...props}
    />
  );
};

export { MotionUp, MotionDown, MotionLeft, MotionRight, MotionScale };
