import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PanelBlocksMotion = styled(motion.div)`
  margin: 0 -10px;
`;

export const PanelBlocks: React.FC<any> = ({
  children,
  staggerChildren = 0,
  ...props
}) => (
  <PanelBlocksMotion
    variants={{ show: { transition: { staggerChildren: staggerChildren } } }}
    initial="hide"
    animate="show"
    exit="hide"
    {...props}
  >
    {children}
  </PanelBlocksMotion>
);

export default PanelBlocks;
