import { BaseTheme } from '../base';

export interface TableRowTheme {
  borderColor: string;
  borderWidth: number;
  horizontal: number;
  vertical: number;
}

export default (baseTheme: BaseTheme): TableRowTheme => ({
  borderColor: baseTheme.colors.grey200,
  borderWidth: 1,
  horizontal: baseTheme.spacing.horizontal,
  vertical: baseTheme.spacing.vertical,
});
