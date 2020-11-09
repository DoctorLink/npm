import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { defaultTheme } from '../../Theme';

const ModalMotion = styled(motion.div)`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: ${(p) => p.theme.modal.borderRadius}px;
  text-align: left;
  position: relative;
  max-width: 650px;
  margin: ${(p) => p.theme.modal.marginY}px auto;
  font-family: ${(p) => p.theme.modal.fontFamily};
  font-size: ${(p) => p.theme.modal.fontSize}px;
  line-height: ${(p) => p.theme.modal.lineHeight}px;
`;

ModalMotion.defaultProps = {
  theme: defaultTheme,
};

export const ModalWindow = React.forwardRef<HTMLDivElement>(
  function ModalWindow({ children }, ref) {
    return (
      <ModalMotion
        ref={ref}
        variants={{
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              y: { type: 'spring', stiffness: 1000, damping: 15, delay: 0.1 },
              default: { duration: 0.3, delay: 0.1 },
            },
          },
          exit: {
            y: 50,
            opacity: 0,
            transition: { duration: 0.3 },
          },
        }}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        {children}
      </ModalMotion>
    );
  }
);
