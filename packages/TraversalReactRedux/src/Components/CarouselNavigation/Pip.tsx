import styled, { css } from 'styled-components';
import { defaultTheme } from '../../Theme';

const pipDiameter = 10;

interface Props {
  selected: boolean;
}

const Pip = styled.div<Props>`
  display: inline-block;
  width: ${pipDiameter}px;
  height: ${pipDiameter}px;
  border-radius: ${pipDiameter / 2}px;
  background-color: #d2d2d2;
  box-shadow: inset 0 2px 2px #a4a4a4;
  margin: ${pipDiameter / 2}px;
  transition: all 0.3s;

  ${p =>
    p.selected &&
    css`
      background-color: ${props => props.theme.colors.brand100};
      box-shadow: none;
    `}
`;

Pip.defaultProps = {
  theme: defaultTheme,
};

export default Pip;
