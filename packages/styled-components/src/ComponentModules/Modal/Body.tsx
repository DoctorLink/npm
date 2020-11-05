import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

export const Body = styled.div`
  padding: ${(p) => p.theme.modal.padding}px;
`;

Body.defaultProps = {
  theme: defaultTheme,
};
