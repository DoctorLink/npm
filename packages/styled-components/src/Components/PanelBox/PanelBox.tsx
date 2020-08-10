import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledPanel = styled(motion.div)`
  @media screen and (min-width: 800px) {
    border-radius: 8px;
    background-color: white;
    border: 1px solid #dbdbdb;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
    padding-top: 40px;
    margin-bottom: 30px;
    overflow: hidden;
  }
`;

const variants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: '250px' },
};

export const PanelBox: React.FC<any> = ({ children, ...props }) => (
  <StyledPanel variants={variants} {...props}>
    {children}
  </StyledPanel>
);

export default PanelBox;
