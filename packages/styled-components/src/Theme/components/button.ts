import { BaseTheme } from '../base';

export interface ButtonTheme {
  borderRadius: number;
  padding: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  hoverColor: string;
  disabled: {
    color: string;
    hoverColor: string;
  };
}

export default (baseTheme: BaseTheme): ButtonTheme => ({
  borderRadius: 0,
  padding: '15px 32px',
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.button.size,
  color: baseTheme.colors.brand100,
  hoverColor: baseTheme.colors.brand200,
  disabled: {
    color: baseTheme.colors.grey300,
    hoverColor: baseTheme.colors.grey300,
  },
});
