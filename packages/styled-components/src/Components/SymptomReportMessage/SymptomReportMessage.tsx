import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SymptomReportTheme } from '../../Theme/components/symptomReport';

export interface SymptomReportMessageProps {
  level: number;
}

const background = (level: number, theme: SymptomReportTheme) => {
  switch (level) {
    case 3:
      return theme.message.backgroundNormal;
    case 2:
      return theme.message.backgroundModerate;
    default:
      return theme.message.backgroundDanger;
  }
};

const StyledPanel = styled(motion.div)<SymptomReportMessageProps>`
  background: ${(p) => background(p.level, p.theme.symptomReport)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 8px;
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
