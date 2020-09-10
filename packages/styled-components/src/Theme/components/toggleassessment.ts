import { BaseTheme } from '../base';

export interface ToggleAssessmentTheme {
  marginTop: number;
  borderColor: string;
  borderRadius: number;
  lineHeight: number;
  buttonMargin: number;
  buttonWidth: number;
  activeButtonBorderRadius: number;
  activeButtonBackgroundColor1: string;
  activeButtonBackgroundColor2: string;
  activeButtonTextColor: string;
  inactiveTextColor: string;
}

export default (baseTheme: BaseTheme): ToggleAssessmentTheme => ({
  marginTop: 20,
  borderColor: baseTheme.colors.toggleAssessmentBorder,
  borderRadius: 28,
  lineHeight: 26,
  buttonMargin: 7,
  buttonWidth: 45,
  activeButtonBorderRadius: 100,
  activeButtonBackgroundColor1: baseTheme.colors.brand100,
  activeButtonBackgroundColor2: baseTheme.colors.brand200,
  activeButtonTextColor: baseTheme.colors.white,
  inactiveTextColor: baseTheme.colors.grey400,
});
