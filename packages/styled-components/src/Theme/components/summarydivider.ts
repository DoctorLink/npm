import { BaseTheme } from '../base';

export interface SummaryDividerTheme {
  backgroundColor: string;
  boxShadowColor: string;
  height: number;
  paddingLeft: number;
  paddingRight: number;
}

export default (baseTheme: BaseTheme): SummaryDividerTheme => ({
  backgroundColor: baseTheme.colors.dividerBackground,
  boxShadowColor: baseTheme.colors.dividerBoxShadow,
  height: 12,
  paddingLeft: baseTheme.spacing.padding + 8,
  paddingRight: baseTheme.spacing.padding,
});
