import { BaseTheme } from '../base';

export interface ModalTheme {
  padding: number;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  borderRadius: number;
  marginY: number;
  header: {
    background: string;
    color: string;
    closeIconColor: string;
  };
}

export default (baseTheme: BaseTheme): ModalTheme => ({
  padding: baseTheme.spacing.padding,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
  borderRadius: 10,
  marginY: 40,
  header: {
    background: baseTheme.colors.white,
    color: 'inherit',
    closeIconColor: baseTheme.colors.black,
  },
});
