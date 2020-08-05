import { BaseTheme } from '../base';

export interface PanelConclusionTitleTheme {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): PanelConclusionTitleTheme => ({
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.medium.size,
  lineHeight: baseTheme.typography.title.medium.lineHeight,
});
