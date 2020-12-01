import styled, { css } from 'styled-components';
import { defaultTheme } from '../../Theme';

export interface PanelBodyTextProps {
  readonly bold?: boolean;
  contrastText?: boolean;
  bullet?: 'default' | 'warning';
}

export const PanelBodyText = styled.div<PanelBodyTextProps>`
  margin: 0;
  display: block;
  color: ${(p) =>
    p.contrastText ? p.theme.colors.white : p.theme.panelbodytext.color};
  font-size: ${(p) => p.theme.panelbodytext.fontSize}px;
  font-family: ${(p) => p.theme.panelbodytext.fontFamily};
  line-height: ${(p) => p.theme.panelbodytext.lineHeight}px;
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};

  ${(p) =>
    p.bullet &&
    css`
      display: list-item;
      margin-left: 14px;
    `}

  ${(p) => {
    const size = p.theme.panelbodytext.fontSize;
    return (
      p.bullet === 'warning' &&
      css`
      list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='${size}px' width='${size}px' viewBox='0 0 24 20' fill='none' stroke='%23ff6c6c' stroke-width='2'%3E%3Cpath d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'%3E%3C/path%3E%3Cline x1='12' y1='9' x2='12' y2='14'%3E%3C/line%3E%3Cline x1='12' y1='16.5' x2='12' y2='18'%3E%3C/line%3E%3C/svg%3E");
    `
    );
  }}
`;

PanelBodyText.defaultProps = {
  theme: defaultTheme,
};

export default PanelBodyText;
