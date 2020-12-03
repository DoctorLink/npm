import { BaseTheme } from '../base';

export interface PanelBodyTextTheme {
  color: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

export default (baseTheme: BaseTheme): PanelBodyTextTheme => ({
  color: 'inherit',
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
});
