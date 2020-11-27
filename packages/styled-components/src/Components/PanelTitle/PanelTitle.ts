import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

export interface PanelTitleProps {
  color?: string;
}

const PanelTitle = styled.div<PanelTitleProps>`
  color: ${(p) => p.color || 'white'};
  font-size: 0.875rem;
  font-weight: 400;
  font-size: ${(p) => p.theme.paneltitle.fontSize}px;
  font-family: ${(p) => p.theme.paneltitle.fontFamily};
  line-height: ${(p) => p.theme.paneltitle.lineHeight}px;
`;

PanelTitle.defaultProps = {
  theme: defaultTheme,
};

export default PanelTitle;
