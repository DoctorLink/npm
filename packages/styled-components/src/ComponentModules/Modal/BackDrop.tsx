import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackDropMotion = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  height: 100%;
  right: 0;
  width: 100%;
  z-index: 100;
`;

export const BackDrop: React.FC = ({ children }) => (
  <BackDropMotion
    variants={{
      enter: {
        opacity: 1,
        transition: {
          default: { duration: 0.15 },
        },
      },
      exit: {
        opacity: 0,
        transition: {
          default: { duration: 0.15 },
        },
      },
    }}
    initial="exit"
    animate="enter"
    exit="exit"
  >
    {children}
  </BackDropMotion>
);
