import { BaseTheme } from '../base';

export interface ChatAnswerTheme {
  padding: number;
  fontFamily: string;
  fontSize: number;
  checkedColor: string;
  focusColor: string;
}

export default (baseTheme: BaseTheme): ChatAnswerTheme => ({
  padding: 16,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  checkedColor: baseTheme.colors.brand50,
  focusColor: baseTheme.colors.inputFocus,
});
