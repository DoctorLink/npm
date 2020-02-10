import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

export interface PanelBodyTextProps {
  readonly bold?: boolean;
}

export const PanelBodyText = styled.div<PanelBodyTextProps>`
  margin: 0;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  font-size: ${p => p.theme.panelbodytext.fontSize}px;
  font-family: ${p => p.theme.panelbodytext.fontFamily};
  font-weight: 400;
  line-height: ${p => p.theme.panelbodytext.lineHeight}px;
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
`;

PanelBodyText.defaultProps = {
  theme: defaultTheme,
};

export default PanelBodyText;
