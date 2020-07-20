import merge from 'lodash.merge';
import base, { BaseTheme } from './base';
import component, { ComponentTheme } from './components';
import { DeepPartial } from 'Models/Utility';

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
