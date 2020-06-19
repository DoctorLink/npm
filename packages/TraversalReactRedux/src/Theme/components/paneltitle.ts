import { BaseTheme } from '../base';

export interface PanelTitleTheme {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): PanelTitleTheme => ({
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.medium.size * 1.2,
  lineHeight: baseTheme.typography.title.medium.lineHeight * 1.2,
});
