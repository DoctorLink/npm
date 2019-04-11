import styled from 'styled-components'

import baseTheme from '../theme/base/index'
import buttonTheme from '../theme/components/button'

const Button = styled.button`
    font-family: 'Noto Sans',sans-serif;
    transition: all 150ms;
    background-color: ${props => props.theme.button.color};
    border: none;
    border-radius: ${props => props.theme.button.borderRadius}px;
    color: white;
    padding: ${props => props.theme.button.padding};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: ${props => props.theme.button.fontSize}px;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.button.hoverColor};
    }
`

Button.defaultProps = {
    theme: { button: buttonTheme(baseTheme) }
};

export default Button