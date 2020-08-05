import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const Title = styled.h1`
  font-family: ${(p) => p.theme.title.fontFamily};
  font-size: ${(p) => p.theme.title.fontSize}px;
  line-height: ${(p) => p.theme.title.lineHeight}px;
  cursor: pointer;
`;

Title.defaultProps = {
  theme: defaultTheme,
};

export default Title;
