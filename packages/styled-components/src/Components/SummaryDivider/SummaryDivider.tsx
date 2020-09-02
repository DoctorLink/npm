import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const SummaryDivider = styled.div`
  @media screen and (max-width: 799px) {
    margin-left: -${(p) => p.theme.summaryDivider.paddingLeft}px;
    margin-right: -${(p) => p.theme.summaryDivider.paddingRight}px;
    height: ${(p) => p.theme.summaryDivider.height}px;
    background-color: ${(p) => p.theme.summaryDivider.backgroundColor};
    box-shadow: inset 0 1px 0 0 ${(p) => p.theme.summaryDivider.boxShadowColor};
  }
  @media screen and (min-width: 450px) {
    margin-right: -${(p) => p.theme.summaryDivider.paddingRight * 2.5}px;
  }
`;

SummaryDivider.defaultProps = {
  theme: defaultTheme,
};

export default SummaryDivider;
