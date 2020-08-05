import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const Response = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.responseMargin}px;
`;

Response.defaultProps = {
  theme: defaultTheme,
};

export default Response;
