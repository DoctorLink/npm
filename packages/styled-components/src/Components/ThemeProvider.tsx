import React from 'react';
// import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, RootTheme, ThemeCreator } from '../Theme';

const CustomThemeProvider: React.FC<{ Theme: RootTheme | ThemeCreator }> = ({
  Theme,
  children,
}) => {
  return (
    <ThemeProvider theme={Theme}>
      {/* ThemeProvider can only accept single parent node so must use Fragment */}
      <React.Fragment>
        {/* <BaseTheme.ImportFont /> */}
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

// CustomThemeProvider.propTypes = {
//     BaseTheme: PropTypes.object,
//     children: PropTypes.node.isRequired,
//     ComponentTheme: PropTypes.func,
// }

CustomThemeProvider.defaultProps = {
  Theme: defaultTheme,
};

export default CustomThemeProvider;
