import { BaseTheme } from '../base';

export interface DateFieldTheme {
  width: number;
  height: number;
  fontFamily: string;
  fontSize: number;
  textAlign: string;
  borderColor: string;
  hoverColor: string;
  focusColor: string;
}

export default (baseTheme: BaseTheme): DateFieldTheme => ({
  width: baseTheme.spacing.inputField.width,
  height: baseTheme.spacing.inputField.height,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.inputField.size,
  textAlign: baseTheme.typography.inputField.textAlign,
  borderColor: baseTheme.colors.grey250,
  hoverColor: baseTheme.colors.brand100,
  focusColor: baseTheme.colors.inputFocus,
});
