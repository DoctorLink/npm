import React from 'react';
import { motion } from 'framer-motion';

const transition = {
  x: { duration: 0.25, ease: 'easeInOut' },
};

const variants = {
  enter: (mirror: boolean) => ({
    opacity: 0,
    x: mirror === true ? '-100%' : '100%',
    transition: transition,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    x: '0',
    transition: transition,
  },
  exit: (mirror: boolean) => ({
    zIndex: 0,
    opacity: 0,
    x: mirror === true ? '100%' : '-100%',
    transition: transition,
  }),
};

export interface TraversalNodesProps {
  mirror: boolean;
}

export const TraversalNodes: React.FC<TraversalNodesProps> = ({
  children,
  mirror,
}) => (
  <motion.div
    variants={variants}
    custom={mirror}
    initial="enter"
    animate="center"
    exit="exit"
  >
    {children}
  </motion.div>
);
