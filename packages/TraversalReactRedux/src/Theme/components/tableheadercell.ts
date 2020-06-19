import { BaseTheme } from '../base';

export interface TableHeaderCellTheme {
  padding: number;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  errorColor: string;
  errorFontSize: number;
}

export default (baseTheme: BaseTheme): TableHeaderCellTheme => ({
  padding: baseTheme.spacing.padding,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
  errorColor: baseTheme.colors.red200,
  errorFontSize: baseTheme.typography.error.size,
});
