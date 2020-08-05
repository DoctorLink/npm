import { BaseTheme } from '../base';

export interface PanelContentTheme {
  padding: number;
}

export default (baseTheme: BaseTheme): PanelContentTheme => ({
  padding: baseTheme.spacing.padding,
});
