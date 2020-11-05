import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.modal.padding}px;
  background: ${(p) => p.theme.modal.header.background};
  color: ${(p) => p.theme.modal.header.color};
  border-top-left-radius: ${(p) => p.theme.modal.borderRadius}px;
  border-top-right-radius: ${(p) => p.theme.modal.borderRadius}px;
`;

Header.defaultProps = {
  theme: defaultTheme,
};
