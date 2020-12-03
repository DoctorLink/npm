import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

export interface PanelTitleProps {
  color?: string;
}

const PanelTitle = styled.div<PanelTitleProps>`
  color: ${(p) => p.color || 'white'};
  font-weight: ${(p) => p.theme.paneltitle.fontWeight};
  font-size: ${(p) => p.theme.paneltitle.fontSize}px;
  font-family: ${(p) => p.theme.paneltitle.fontFamily};
  line-height: ${(p) => p.theme.paneltitle.lineHeight}px;
`;

PanelTitle.defaultProps = {
  theme: defaultTheme,
};

export default PanelTitle;
