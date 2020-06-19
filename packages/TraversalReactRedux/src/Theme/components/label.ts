import { BaseTheme } from '../base';

export interface LabelTheme {
  borderColor: string;
  borderWidth: number;
  vertical: number;
}

export default (baseTheme: BaseTheme): LabelTheme => ({
  borderColor: baseTheme.colors.grey200,
  borderWidth: 1,
  vertical: baseTheme.spacing.vertical,
});
