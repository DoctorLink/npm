import { BaseTheme } from '../base';

export interface HealthReportConclusionTheme {
  fontSize: number;
  lineHeight: number;
  verticalPadding: number;
}

export default (baseTheme: BaseTheme): HealthReportConclusionTheme => ({
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
  verticalPadding: baseTheme.spacing.padding / 2,
});
