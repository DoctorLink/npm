import { BaseTheme } from '../base';

export interface TableAnswerCellTheme {
  padding: number;
}

export default (baseTheme: BaseTheme): TableAnswerCellTheme => ({
  padding: baseTheme.spacing.padding,
});
