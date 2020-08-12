import React from 'react';
import { Panel, PanelContent } from '../../../Components';
import CheckableConclusions from './CheckableConclusions';
import CheckableConclusionHeader from '../../../Components/CheckableConclusionHeader';
import styled from 'styled-components';

const StyledPanelContent = styled(PanelContent)`
  border-radius: 0 0 8px 8px;
`;
const CheckableConclusionsPanel: React.FC<{
  traversalId: any;
  conclusions: any;
}> = ({ conclusions }) => (
  <Panel>
    <CheckableConclusionHeader />
    <StyledPanelContent>
      <CheckableConclusions conclusions={conclusions} />
    </StyledPanelContent>
  </Panel>
);

export default CheckableConclusionsPanel;
