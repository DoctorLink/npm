import { BaseTheme } from '../base';

export interface TitleTheme {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): TitleTheme => ({
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.large.size,
  lineHeight: baseTheme.typography.title.large.lineHeight,
});
