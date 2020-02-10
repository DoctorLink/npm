import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const DisplayText = styled.div`
  font-family: ${p => p.theme.displayText.fontFamily};
  padding-left: ${p => p.theme.displayText.padding}px;
  font-size: ${p => p.theme.displayText.fontSize}px;
  line-height: ${p => p.theme.displayText.lineHeight}px;
`;

DisplayText.defaultProps = {
  theme: defaultTheme,
};

export default DisplayText;
