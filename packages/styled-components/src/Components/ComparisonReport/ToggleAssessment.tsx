import React, { FC } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import { AnimatePresence, motion } from 'framer-motion';

const BottomBar = styled.div`
  @media screen and (max-width: 799px) {
    margin-top: ${(p) => p.theme.toggleAssessment.marginTop}px;
    display: block;
    box-sizing: border-box;
    height: 42px;
    border: 1px solid ${(p) => p.theme.toggleAssessment.borderColor};
    border-radius: ${(p) => p.theme.toggleAssessment.borderRadius}px;
    letter-spacing: 0;
    line-height: ${(p) => p.theme.toggleAssessment.lineHeight}px;
    text-align: center;
  }
`;

const Active = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  margin: ${(p) => p.theme.toggleAssessment.buttonMargin}px;
  height: 26px;
  width: ${(p) => p.theme.toggleAssessment.buttonWidth}%;
  border-radius: ${(p) => p.theme.toggleAssessment.activeButtonBorderRadius}px;
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.toggleAssessment.activeButtonBackgroundColor1} 10%,
    ${(p) => p.theme.toggleAssessment.activeButtonBackgroundColor2} 90%
  );
  color: ${(p) => p.theme.toggleAssessment.activeButtonTextColor};
  float: left;
`;

const Inactive = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  margin: ${(p) => p.theme.toggleAssessment.buttonMargin}px;
  height: 26px;
  width: ${(p) => p.theme.toggleAssessment.buttonWidth}%;
  color: ${(p) => p.theme.toggleAssessment.inactiveTextColor};
  float: left;
`;

BottomBar.defaultProps = {
  theme: defaultTheme,
};

Active.defaultProps = {
  theme: defaultTheme,
};

Inactive.defaultProps = {
  theme: defaultTheme,
};

interface ToggleAssessmentProps {
  currentTitle?: string;
  previousTitle?: string;
  active: string;
  onSetActive(value: string): void;
}

const ToggleAssessment: FC<ToggleAssessmentProps> = ({
  currentTitle,
  previousTitle,
  active,
  onSetActive,
}) => {
  const [Previous, Current] =
    active === 'previous' ? [Active, Inactive] : [Inactive, Active];
  return (
    <BottomBar>
      <AnimatePresence>
        <Previous onClick={() => onSetActive('previous')}>
          {previousTitle}
        </Previous>
      </AnimatePresence>
      <AnimatePresence>
        <Current onClick={() => onSetActive('current')}>{currentTitle}</Current>
      </AnimatePresence>
    </BottomBar>
  );
};

export default ToggleAssessment;
