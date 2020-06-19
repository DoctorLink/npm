import { BaseTheme } from '../base';

export interface PanelBodyTextTheme {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): PanelBodyTextTheme => ({
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
});
