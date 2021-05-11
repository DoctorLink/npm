import merge from 'lodash.merge';
import base, { BaseTheme } from './base';
import component, { ComponentTheme } from './components';
import { DeepPartial } from '@doctorlink/traversal-core';
import {
  DefaultTheme,
  StyledComponent,
  useTheme as useThemeBase,
} from 'styled-components';

export interface RootTheme extends BaseTheme, ComponentTheme {}

export type ThemeCreator<T = any> = (parentTheme: T) => RootTheme & T;

export const createTheme = <T = Record<string, unknown>>(
  baseOptions: DeepPartial<BaseTheme> = base,
  componentOptions: DeepPartial<ComponentTheme> = {}
): ThemeCreator<T> => {
  const baseObj = base;
  merge(baseObj, baseOptions);
  const compObj = component(baseObj);
  merge(compObj, componentOptions);
  return (parentTheme) => ({
    ...parentTheme,
    ...compObj,
    ...baseObj,
  });
};

export const defaultTheme: RootTheme = {
  ...component(base),
  ...base,
};

/** Sets the component's `defaultProps.theme` so it can reference theme properties without needing to be wrapped in a ThemeProvider. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withDefaultTheme = <T extends StyledComponent<any, any>>(
  Component: T
): T => {
  Component.defaultProps = {
    theme: defaultTheme,
  };
  return Component;
};

export const useTheme = (): DefaultTheme => useThemeBase() || defaultTheme;
