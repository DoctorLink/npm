import React, { FC } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

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
    & .active {
      margin: ${(p) => p.theme.toggleAssessment.buttonMargin}px;
      height: 26px;
      width: ${(p) => p.theme.toggleAssessment.buttonWidth}%;
      border-radius: ${(p) =>
        p.theme.toggleAssessment.activeButtonBorderRadius}px;
      background: linear-gradient(
        180deg,
        ${(p) => p.theme.toggleAssessment.activeButtonBackgroundColor1} 10%,
        ${(p) => p.theme.toggleAssessment.activeButtonBackgroundColor2} 90%
      );
      color: ${(p) => p.theme.toggleAssessment.activeButtonTextColor};
      float: left;
    }
    & .inactive {
      margin: ${(p) => p.theme.toggleAssessment.buttonMargin}px;
      height: 26px;
      width: ${(p) => p.theme.toggleAssessment.buttonWidth}%;
      color: ${(p) => p.theme.toggleAssessment.inactiveTextColor};
      float: left;
    }
  }
`;

BottomBar.defaultProps = {
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
  return (
    <BottomBar>
      <div
        className={active === 'previous' ? 'active' : 'inactive'}
        onClick={() => onSetActive('previous')}
      >
        {previousTitle}
      </div>
      <div
        className={active === 'current' ? 'active' : 'inactive'}
        onClick={() => onSetActive('current')}
      >
        {currentTitle}
      </div>
    </BottomBar>
  );
};

export default ToggleAssessment;
