import React from 'react';
import PanelHeader from '../PanelHeader';
import PanelBodyText from '../PanelBodyText';
import colors from '../../Theme/base/colors';

export const HealthReportPanelHeader: React.FC<{}> = ({ children }) => (
  <PanelHeader color={colors.grey200}>
    <PanelBodyText bold>{children}</PanelBodyText>
  </PanelHeader>
);

export default HealthReportPanelHeader;
