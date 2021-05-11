import styled from 'styled-components';
import { withDefaultTheme } from '../../Theme';

export const SymptomReportMessageTitle = withDefaultTheme(styled.div`
  display: flex;
  align-items: center;
  font-weight: ${(p) => p.theme.symptomReport.messageTitle.fontWeight};
  font-size: ${(p) => p.theme.symptomReport.messageTitle.fontSize}px;
  font-family: ${(p) => p.theme.symptomReport.messageTitle.fontFamily};
  line-height: ${(p) => p.theme.symptomReport.messageTitle.lineHeight}px;
  padding-bottom: ${(p) => p.theme.symptomReport.messageTitle.paddingBottom}px;
`);
