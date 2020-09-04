import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const ComparisonReportTitle = styled.h2`
  color: ${(p) => p.theme.comparisonreporttitle.color};
  font-family: ${(p) => p.theme.comparisonreporttitle.fontFamily};
  font-weight: ${(p) => p.theme.comparisonreporttitle.fontWeight};
  font-size: ${(p) => p.theme.comparisonreporttitle.fontSize}px;
  line-height: ${(p) => p.theme.comparisonreporttitle.lineHeight}px;
  @media screen and (min-width: 800px) {
    padding-left: ${(p) => p.theme.comparisonreporttitle.paddingLeft}px;
  }
`;

ComparisonReportTitle.defaultProps = {
  theme: defaultTheme,
};

export default ComparisonReportTitle;
