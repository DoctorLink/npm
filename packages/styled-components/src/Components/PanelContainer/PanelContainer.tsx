import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface PanelContainerProps {
  float: string;
}

const Styled = styled(motion.div)<PanelContainerProps>`
  box-sizing: border-box;
  padding: 0 10px;
  float: ${(p) => p.float || 'left'};

  @media screen and (min-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

const variants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: '250px' },
};

export const Panel: React.FC<any> = ({ children, ...props }) => (
  <Styled variants={variants} {...props}>
    {children}
  </Styled>
);

export default Panel;
