import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PanelContainerProps } from '../../Components/PanelContainer/PanelContainer';

const Styled = styled(motion.div)<PanelContainerProps>`
  box-sizing: border-box;

  float: ${(p) => p.float || 'left'};

  @media screen and (min-width: 600px) {
    width: 33.3%;
    &:not(:last-child) {
      padding-right: 16px;
    }
  }

  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

const variants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: '250px' },
};

export const SummaryPanel: React.FC<any> = ({ children, ...props }) => (
  <Styled variants={variants} {...props}>
    {children}
  </Styled>
);

export default SummaryPanel;
