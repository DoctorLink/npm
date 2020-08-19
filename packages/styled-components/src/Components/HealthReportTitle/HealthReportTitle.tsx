import React from 'react';
import PanelBodyText from '../PanelBodyText';
import styled, { CSSProperties } from 'styled-components';
import { defaultTheme } from '../../Theme';

const StyledPanelBodyText = styled(PanelBodyText)`
  color: ${(p) => p.theme.colors.brand100};
  font-weight: 600;
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
