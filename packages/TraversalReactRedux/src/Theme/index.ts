import merge from 'lodash.merge';
import base, { BaseTheme } from './base';
import component, { ComponentTheme } from './components';

// Makes all properties of a type optional, along with sub-properties recursively.
// Adapted from https://stackoverflow.com/a/49936686/3248302, simplified by removing unnecessary (for our purposes) support for arrays.
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface RootTheme extends BaseTheme, ComponentTheme {}

export type ThemeCreator<T = any> = (parentTheme: T) => RootTheme & T;

export const createTheme = <T = {}>(
  baseOptions: DeepPartial<BaseTheme> = base,
  componentOptions: DeepPartial<ComponentTheme> = {}
): ThemeCreator<T> => {
  let baseObj = base;
  merge(baseObj, baseOptions);
  let compObj = component(baseObj);
  merge(compObj, componentOptions);
  return parentTheme => ({
    ...parentTheme,
    ...compObj,
    ...baseObj,
  });
};

export const defaultTheme: RootTheme = {
  ...component(base),
  ...base,
};
