import { BaseTheme } from '../base';

export interface QuestionTitleTheme {
  padding: number;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): QuestionTitleTheme => ({
  padding: baseTheme.spacing.padding,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.small.size,
  lineHeight: baseTheme.typography.title.small.lineHeight,
});
