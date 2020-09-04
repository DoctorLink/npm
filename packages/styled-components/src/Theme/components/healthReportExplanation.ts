import { BaseTheme } from '../base';

export interface HealthReportExplanationTheme {
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): HealthReportExplanationTheme => ({
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
});
