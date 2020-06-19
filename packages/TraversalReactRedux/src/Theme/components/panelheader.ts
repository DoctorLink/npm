import { BaseTheme } from '../base';

export interface PanelHeaderTheme {
  padding: number;
}

export default (baseTheme: BaseTheme): PanelHeaderTheme => ({
  padding: baseTheme.spacing.padding,
});
