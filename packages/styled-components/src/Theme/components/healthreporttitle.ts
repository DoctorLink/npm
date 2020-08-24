import { BaseTheme } from '../base';

export interface HealthReportTitleTheme {
  color: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number | string;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): HealthReportTitleTheme => ({
  color: baseTheme.colors.brand100,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.small.size,
  fontWeight: 600,
  lineHeight: baseTheme.typography.title.small.lineHeight,
});
