import { BaseTheme } from '../base';

export interface ChatPreviousAnswerTheme {
  borderRadius: number;
  padding: number;
  fontFamily: string;
  fontSize: number;
  color: string;
  hoverColor: string;
  focusColor: string;
}

export default (baseTheme: BaseTheme): ChatPreviousAnswerTheme => ({
  borderRadius: 6,
  padding: 16,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  color: baseTheme.colors.brand100,
  hoverColor: baseTheme.colors.brand200,
  focusColor: baseTheme.colors.inputFocus,
});
