import { BaseTheme } from '../base';

export interface AlgoNameTheme {
  padding: number;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

const algoName = (baseTheme: BaseTheme): AlgoNameTheme => ({
  padding: baseTheme.spacing.padding,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.title.medium.size,
  lineHeight: baseTheme.typography.title.medium.lineHeight,
});

export default algoName;
