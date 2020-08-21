import React from 'react';
import PanelBodyText from '../PanelBodyText';
import styled, { CSSProperties } from 'styled-components';
import { defaultTheme } from '../../Theme';

const StyledPanelBodyText = styled(PanelBodyText)`
  color: ${(p) => p.theme.healthreporttitle.color};
  font-family: ${(p) => p.theme.healthreporttitle.fontFamily};
  font-weight: ${(p) => p.theme.healthreporttitle.fontWeight};
  font-size: ${(p) => p.theme.healthreporttitle.fontSize}px;
  line-height: ${(p) => p.theme.healthreporttitle.lineHeight}px;
`;

StyledPanelBodyText.defaultProps = {
  theme: defaultTheme,
};

export const HealthReportTitle: React.FC<{
  style?: CSSProperties;
}> = ({ children, ...props }) => (
  <StyledPanelBodyText bold {...props}>
    {children}
  </StyledPanelBodyText>
);

export default HealthReportTitle;
