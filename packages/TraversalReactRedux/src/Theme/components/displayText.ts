import { BaseTheme } from '../base';

export interface DisplayTextTheme {
  fontFamily: string;
  padding: number;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): DisplayTextTheme => ({
  fontFamily: baseTheme.typography.fontFamily,
  padding: baseTheme.spacing.padding,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
});
