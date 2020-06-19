import colors, { ColorsTheme } from './colors';
import spacing, { SpacingTheme } from './spacing';
import typography, { TypographyTheme } from './typography';

export interface BaseTheme {
  colors: ColorsTheme;
  spacing: SpacingTheme;
  typography: TypographyTheme;
}

const baseTheme: BaseTheme = { colors, spacing, typography };

export default baseTheme;
