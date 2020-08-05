import { BaseTheme } from '../base';

interface ColorProps {
  color: string;
}

export interface CheckboxTheme {
  size: number;
  borderRadius: number;
  padding: number;
  checked: ColorProps;
  unchecked: ColorProps;
  icon: ColorProps;
  focus: ColorProps;
}

export default (baseTheme: BaseTheme): CheckboxTheme => ({
  size: baseTheme.typography.regular.lineHeight,
  borderRadius: 2,
  padding: baseTheme.spacing.padding,
  checked: {
    color: baseTheme.colors.brand100,
  },
  unchecked: {
    color: baseTheme.colors.grey250,
  },
  icon: {
    color: baseTheme.colors.brand50,
  },
  focus: {
    color: baseTheme.colors.lightBlue100,
  },
});
