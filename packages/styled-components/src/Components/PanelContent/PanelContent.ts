import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const PanelContent = styled.div`
  box-sizing: border-box;
  padding: ${(p) => p.theme.panelcontent.padding}px;

  @media screen and (min-width: 800px) {
    padding: ${(p) => p.theme.panelcontent.padding}px
      ${(p) => p.theme.panelcontent.padding * 1.5}px;
  }
`;

PanelContent.defaultProps = {
  theme: defaultTheme,
};

export default PanelContent;
