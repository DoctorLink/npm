import merge from 'lodash.merge';
import base from './base';
import component from './components';

const createTheme = (baseOptions = base, componentOptions = {}) => {
    let baseObj = base;
    merge(baseObj, baseOptions)
    let compObj = component(baseObj);
    merge(compObj, componentOptions)
    return parentTheme => ({
        ...parentTheme,
        ...compObj,
        ...baseObj,
    })
}

export default createTheme