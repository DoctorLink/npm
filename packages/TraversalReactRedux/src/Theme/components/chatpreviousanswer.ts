import { BaseTheme } from '../base';

export interface ChatPreviousAnswerTheme {
  borderRadius: number;
  padding: number;
  fontFamily: string;
  fontSize: number;
  color: string;
  hoverColor: string;
}

export default (baseTheme: BaseTheme): ChatPreviousAnswerTheme => ({
  borderRadius: 6,
  padding: 16,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.button.size,
  color: baseTheme.colors.brand100,
  hoverColor: baseTheme.colors.brand200,
});
