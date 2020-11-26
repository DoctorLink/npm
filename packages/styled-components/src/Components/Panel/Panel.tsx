import React from 'react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';

const StyledPanel = styled(motion.div)`
  background-color: white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 30px;
  overflow: hidden;
  @media screen and (max-width: 799px) {
    border-radius: 0 0 8px 8px;
  }
  @media screen and (min-width: 800px) {
    border-radius: 8px;
  }
`;

const variants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: '250px' },
};

export const Panel: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  ...props
}) => (
  <StyledPanel variants={variants} {...props}>
    {children}
  </StyledPanel>
);

export default Panel;
