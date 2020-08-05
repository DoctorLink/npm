import { BaseTheme } from '../base';

export interface InfoIconTheme {
  color: string;
  hoverColor: string;
  focusColor: string;
  padding: number;
  size: number;
}

export default (baseTheme: BaseTheme): InfoIconTheme => ({
  color: baseTheme.colors.brand100,
  hoverColor: baseTheme.colors.lightBlue100,
  focusColor: baseTheme.colors.lightBlue100,
  padding: baseTheme.spacing.padding,
  size: baseTheme.typography.regular.lineHeight,
});
