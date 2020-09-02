import { BaseTheme } from '../base';

export interface ComparisonReportTitleTheme {
  color: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number | string;
  lineHeight: number;
  paddingLeft: number;
}

export default (baseTheme: BaseTheme): ComparisonReportTitleTheme => ({
  color: baseTheme.colors.grey300,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.small.size,
  fontWeight: 600,
  lineHeight: baseTheme.typography.title.small.lineHeight,
  paddingLeft: baseTheme.spacing.padding,
});
