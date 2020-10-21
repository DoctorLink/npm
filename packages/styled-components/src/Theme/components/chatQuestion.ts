import { BaseTheme } from '../base';

export interface ChatQuestionTheme {
  padding: number;
  fontSize: number;
  lineHeight: number;
  fontWeight: number | string;
  subtext: {
    fontSize: number;
    lineHeight: number;
    fontWeight: number | string;
    fontStyle: string;
  };
}

export default (baseTheme: BaseTheme): ChatQuestionTheme => ({
  padding: 16,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
  fontWeight: 600,
  subtext: {
    fontSize: baseTheme.typography.small.size,
    lineHeight: baseTheme.typography.small.lineHeight,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
});
