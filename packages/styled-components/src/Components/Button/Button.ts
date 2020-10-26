import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const Button = styled.button`
  font-family: ${(props) => props.theme.button.fontFamily};
  transition: all 150ms;
  background-color: ${(props) => props.theme.button.color};
  border: none;
  border-radius: ${(props) => props.theme.button.borderRadius}px;
  color: white;
  padding: ${(props) => props.theme.button.padding};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.theme.button.fontSize}px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.button.hoverColor};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.button.disabled.color};

    &:hover {
      background: ${(props) => props.theme.button.disabled.hoverColor};
    }
  }
`;

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
