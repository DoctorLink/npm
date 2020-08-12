import React from 'react';
import PanelBodyText from '../PanelBodyText';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const StyledPanelBodyText = styled(PanelBodyText)`
  color: ${(p) => p.theme.colors.brand100};
  font-weight: 600;
`;

StyledPanelBodyText.defaultProps = {
  theme: defaultTheme,
};

export const HealthReportTitle: React.FC = ({ children }) => (
  <StyledPanelBodyText bold>{children}</StyledPanelBodyText>
);

export default HealthReportTitle;
