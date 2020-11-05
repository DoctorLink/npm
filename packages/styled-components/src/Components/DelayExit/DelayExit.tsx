import React from 'react';
import { motion } from 'framer-motion';

export interface DelayExitProps {
  delay?: number;
}

const DelayExit: React.FC<DelayExitProps> = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      variants={{
        enter: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0, delay: delay } },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default DelayExit;
