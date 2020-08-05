import { BaseTheme } from '../base';

export interface ErrorTextTheme {
  padding: number;
  color: string;
  fontFamily: string;
  fontSize: number;
}

export default (baseTheme: BaseTheme): ErrorTextTheme => ({
  padding: baseTheme.spacing.padding,
  color: baseTheme.colors.red200,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.error.size,
});
