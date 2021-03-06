import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const AlgoName = styled.h2`
  margin: 0;
  padding: ${(p) => p.theme.algoname.padding}px 0;
  font-family: ${(p) => p.theme.algoname.fontFamily};
  font-size: ${(p) => p.theme.algoname.fontSize}px;
  line-height: ${(p) => p.theme.algoname.lineHeight}px;
`;

AlgoName.defaultProps = {
  theme: defaultTheme,
};

export default AlgoName;
