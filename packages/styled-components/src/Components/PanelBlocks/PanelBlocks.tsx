import React from 'react';
import { motion } from 'framer-motion';

export const PanelBlocks: React.FC<any> = ({
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
