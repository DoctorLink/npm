import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface PanelBlocksProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
}

export const PanelBlocks: React.FC<PanelBlocksProps> = ({
  children,
  staggerChildren = 0,
  ...props
}) => (
  <motion.div
    variants={{ show: { transition: { staggerChildren: staggerChildren } } }}
    initial="hide"
    animate="show"
    exit="hide"
    {...props}
  >
    {children}
  </motion.div>
);

export default PanelBlocks;
