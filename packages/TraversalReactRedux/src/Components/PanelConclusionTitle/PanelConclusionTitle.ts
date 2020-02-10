import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const PanelConclusionTitle = styled.div`
  display: inline;
  font-weight: normal;
  font-size: ${p => p.theme.panelconclusiontitle.fontSize}px;
  font-family: ${p => p.theme.panelconclusiontitle.fontFamily};
  line-height: ${p => p.theme.panelconclusiontitle.lineHeight}px;

  ::after {
    content: ' ';
  }
`;

PanelConclusionTitle.defaultProps = {
  theme: defaultTheme,
};

export default PanelConclusionTitle;
