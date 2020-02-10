import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const Button = styled.button`
  font-family: ${props => props.theme.button.fontFamily};
  transition: all 150ms;
  background-color: ${props =>
    props.disabled
      ? props.theme.button.disabled.color
      : props.theme.button.color};
  border: none;
  border-radius: ${props => props.theme.button.borderRadius}px;
  color: white;
  padding: ${props => props.theme.button.padding};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${props => props.theme.button.fontSize}px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background: ${props =>
      props.disabled
        ? props.theme.button.disabled.hoverColor
        : props.theme.button.hoverColor};
  }
`;

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
