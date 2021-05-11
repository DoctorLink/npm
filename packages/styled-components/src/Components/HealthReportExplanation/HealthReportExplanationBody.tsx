import styled from 'styled-components';
import { withDefaultTheme } from '../../Theme';

export const HealthReportExplanationBody = withDefaultTheme(styled.div`
  font-size: ${(p) => p.theme.healthReportExplanation.fontSize}px;
  line-height: ${(p) => p.theme.healthReportExplanation.lineHeight}px;
`);
