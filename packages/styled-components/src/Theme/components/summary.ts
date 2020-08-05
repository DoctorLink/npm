import { BaseTheme } from '../base';

export interface SummaryTheme {
  padding: number;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  color: string;
}

export default (baseTheme: BaseTheme): SummaryTheme => ({
  padding: baseTheme.spacing.padding,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
  color: baseTheme.colors.brand100,
});
