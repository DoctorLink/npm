import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const StyledLabel = styled.label`
  display: flex;
  width: 100%;
  cursor: pointer;
  padding: ${(p) => p.theme.label.vertical}px 0;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 ${(p) => p.theme.label.borderColor};
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

// const Label = ({ children, ...props }) => {
//     return (<StyledLabel {...props}>
//         {children}
//     </StyledLabel>)
// };

export default StyledLabel;
