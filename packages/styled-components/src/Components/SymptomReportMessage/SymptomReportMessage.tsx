import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface SymptomReportMessageProps {
  color: string;
}
const StyledPanel = styled(motion.div)<SymptomReportMessageProps>`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 30px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  border-left: 8px solid ${(p) => p.color};
`;

const variants = {
  show: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: '250px' },
};

export const SymptomReportMessage: React.FC<SymptomReportMessageProps> = ({
  children,
  ...props
}) => (
  <StyledPanel variants={variants} {...props}>
    {children}
  </StyledPanel>
);
