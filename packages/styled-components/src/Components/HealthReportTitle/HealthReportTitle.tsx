import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const HealthReportTitle = styled.h2`
  color: ${(p) => p.theme.healthreporttitle.color};
  font-family: ${(p) => p.theme.healthreporttitle.fontFamily};
  font-weight: ${(p) => p.theme.healthreporttitle.fontWeight};
  font-size: ${(p) => p.theme.healthreporttitle.fontSize}px;
  line-height: ${(p) => p.theme.healthreporttitle.lineHeight}px;
  margin-top: 0;
`;

HealthReportTitle.defaultProps = {
  theme: defaultTheme,
};

export default HealthReportTitle;
