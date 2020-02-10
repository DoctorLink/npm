import merge from 'lodash.merge';
import base from './base';
import component from './components';

export const createTheme = (baseOptions = base, componentOptions = {}) => {
  let baseObj = base;
  merge(baseObj, baseOptions);
  let compObj = component(baseObj);
  merge(compObj, componentOptions);
  return (parentTheme: any) => ({
    ...parentTheme,
    ...compObj,
    ...baseObj,
  });
};

export const defaultTheme = {
  ...component(base),
  ...base,
};
