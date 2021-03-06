import { BaseTheme } from '../base';

export interface NumberFieldTheme {
  width: number;
  height: number;
  fontFamily: string;
  fontSize: number;
  textAlign: AlignSetting;
  borderColor: string;
  hoverColor: string;
  focusColor: string;
}

export default (baseTheme: BaseTheme): NumberFieldTheme => ({
  width: baseTheme.spacing.inputField.width,
  height: baseTheme.spacing.inputField.height,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.inputField.size,
  textAlign: baseTheme.typography.inputField.textAlign,
  borderColor: baseTheme.colors.grey250,
  hoverColor: baseTheme.colors.brand100,
  focusColor: baseTheme.colors.inputFocus,
});
