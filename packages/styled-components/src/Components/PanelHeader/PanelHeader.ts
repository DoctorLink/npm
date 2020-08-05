import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const PanelHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.panelheader.padding}px;
  background-color: ${(p) => p.color || '#666'};

  @media screen and (min-width: 800px) {
    padding: ${(p) => p.theme.panelheader.padding}px
      ${(p) => p.theme.panelheader.padding * 1.5}px;
  }
`;

PanelHeader.defaultProps = {
  theme: defaultTheme,
};

export default PanelHeader;
