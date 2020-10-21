import { BaseTheme } from '../base';

export interface EditAnswerIconTheme {
  color: string;
  hoverColor: string;
  focusColor: string;
  size: number;
}

export default (baseTheme: BaseTheme): EditAnswerIconTheme => ({
  color: baseTheme.colors.brand100,
  hoverColor: baseTheme.colors.lightBlue100,
  focusColor: baseTheme.colors.lightBlue100,
  size: 20,
});
